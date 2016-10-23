using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Website
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "ProjectRoute",
            //    url: "Project/{ProjectName}",
            //    defaults: new { controller = "Home", action = "Project", ProjectName = UrlParameter.Optional }
            //    );

            routes.MapRoute(
                name: "CookieMod",
                url: "FreshCAA/{action}",
                defaults: new { controller = "Project", action = "CookieMod", Page = UrlParameter.Optional }
                );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Error",
                url:  "{*url}",
                defaults: new { controller = "Home", action = "Index" }  // 404s
            );


        }
    }
}