using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Website.Controllers
{
    public class ProjectController : Controller
    {
        //
        // GET: /Project/

        public ActionResult Index()
        {
            return View("../Projects");
        }

        public ActionResult Engine()
        {
            return View("../Projects/Engine");
        }

        public ActionResult Zombie()
        {
            return View("../Projects/Zombie");
        }

        public ActionResult EscherPlex()
        {
            return View("../Projects/EscherPlex");
        }

        public ActionResult Lycan()
        {
            return View("../Projects/Lycan");
        }

        public ActionResult TC5()
        {
            return View("../Projects/TC5");
        }

        public ActionResult CookieMod(string Page)
        {
            return View("../Projects/CookieMod");
        }
        public ActionResult FreshCookieMod()
        {
            return File("~/Content/Projects/CookieMod/FreshCAAMod.zip", "application/zip", "FreshCookieMod.zip");
        }
    }
}
