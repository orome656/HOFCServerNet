using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using HOFCServerNet.Data.Models;
using Microsoft.AspNetCore.Http.Authentication;
using HOFCServerNet.ViewModels.Account;
using HOFCServerNet.Extensions;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using NLog;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class APIAccountController : Controller
    {
        private static Logger Logger = LogManager.GetLogger("HOFCServerNet.API.APIAccountController");
        private SignInManager<ApplicationUser> _signInManager;
        private UserManager<ApplicationUser> _userManager;

        public APIAccountController(SignInManager<ApplicationUser> signInManager,
                                    UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        // GET: api/values
        [HttpGet]
        [Route("ExternalLogins")]
        public IEnumerable<ExternalLoginViewModel> GetExternalLogins(string returnUrl, string error = null)
        {
            IEnumerable<AuthenticationDescription> descriptions = _signInManager.GetExternalAuthenticationSchemes();

            List<ExternalLoginViewModel> externals = new List<ExternalLoginViewModel>();

            foreach(var description in descriptions)
            {
                externals.Add(new ExternalLoginViewModel()
                {
                    Name = description.DisplayName,
                    Url = Url.RouteUrl("ExternalLogin", new
                    {
                        provider = description.DisplayName,
                        response_type = "token",
                        client_id = "self",
                        redirect_uri = new Uri(Request.ToUri(), returnUrl).AbsoluteUri
                    })
                });
            }

            return externals;
        }


        // GET api/Account/ExternalLogin
        //[OverrideAuthentication]
        //[HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("ExternalLogin", Name = "ExternalLogin")]
        public async Task<ChallengeResult> GetExternalLogin(string provider, string returnUrl = null)
        {
            var redirectUrl = Url.Action("ExternalLoginCallback", "APIAccount", new { ReturnUrl = returnUrl });
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return new ChallengeResult(provider, properties);
        }

        [AllowAnonymous]
        public async Task<StatusCodeResult> ExternalLoginCallback(string returnUrl = null)
        {
            var infos = await _signInManager.GetExternalLoginInfoAsync();
            if (infos == null)
            {
                return BadRequest();
            }

            var result = await _signInManager.ExternalLoginSignInAsync(infos.LoginProvider, infos.ProviderKey, isPersistent: false);
            if(result.Succeeded)
            {
                // Il faudra peut etre retourner le token
                return Ok();
            }
            else
            {
                // L'utilisateur n'existe pas encore, il faut le créer dans la BDD
                var email = infos.Principal.FindFirstValue(ClaimTypes.Email);

                // Get the information about the user from the external login provider
                var info = await _signInManager.GetExternalLoginInfoAsync();
                if (info == null)
                {
                    return StatusCode(502);
                }
                var user = new ApplicationUser() { UserName = email, Email = email };
                var resultCreate = await _userManager.CreateAsync(user);
                if (resultCreate.Succeeded)
                {
                    var resultLogin = await _userManager.AddLoginAsync(user, info);
                    if (resultLogin.Succeeded)
                    {
                        await _signInManager.SignInAsync(user, isPersistent: false);
                        Logger.Info("User created an account using {Name} provider.", info.LoginProvider);
                        return Ok();
                    }
                    else
                    {
                        return StatusCode(500);
                    }
                }
                else
                {
                    return StatusCode(500);
                }
            }
        }
    }
}
