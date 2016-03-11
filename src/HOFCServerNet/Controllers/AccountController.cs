using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Identity;
using HOFCServerNet.Data.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HOFCServerNet.Controllers
{
    public class AccountController : Controller
    {
        private UserManager<ApplicationUser> SecurityManager { get; set; }

        private SignInManager<ApplicationUser> LoginManager { get; set; }

        public AccountController(UserManager<ApplicationUser> secMgr, SignInManager<ApplicationUser> loginMgr)
        {
            SecurityManager = secMgr;
            LoginManager = loginMgr;
        }

        [HttpGet]
        [Route("Account/Login")]
        public IActionResult Login(string returnUrl)
        {
            var result = LoginManager.PasswordSignInAsync("admin", "admin", false, false).Result;
            
            if (result.Succeeded)
            {
                return Redirect(returnUrl);
            }
            return null;

        }


        [HttpGet]
        [Route("Account/Register")]
        public void Register()
        {
            var user = new ApplicationUser
            {
                UserName = "admin"
            };
            var result = SecurityManager.CreateAsync(user, "P@ssword1").Result;
            
            if(result.Succeeded)
            {

            }
        }
    }
}
