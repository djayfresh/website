using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Website.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View("../SplashPage");
        }

        public ActionResult Resume()
        {
            return View("../Resume");  //File("~/Content/Resume.pdf", "application/pdf", "DougFresh_Resume.pdf");
        }

        public ActionResult Projects()
        {
            return View("../Projects");
        }

        public ActionResult Error()
        {
            return View("../Error/Http404");
        }

        public ActionResult Project(string ProjectName)
        {
            return View("../Project");
        }

        public ActionResult About()
        {
            return View("../About");
        }

        public ActionResult Contact()
        {
            return View("../Contact");
        }

    }
}
