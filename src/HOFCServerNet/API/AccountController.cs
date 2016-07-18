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

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.API
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private SignInManager<ApplicationUser> _signInManager;

        public AccountController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
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
        public async Task<IActionResult> GetExternalLogin(string provider, string error = null)
        {
            return Ok();
        }
    }
}
