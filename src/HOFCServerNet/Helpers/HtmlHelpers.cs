using Microsoft.AspNet.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Helpers
{
    public static class HtmlHelpers
    {
        public static string IsActive(
            this IHtmlHelper html,
            string actionName,
            string controllerName)
        {
            var routeData = html.ViewContext.RouteData;

            var routeAction = (string)routeData.Values["action"];
            var routeControl = (string)routeData.Values["controller"];

            var returnActive = controllerName == routeControl;

            return returnActive ? "active" : "";
        }
    }
}
