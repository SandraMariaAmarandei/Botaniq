﻿using System.Web;
using System.Web.Optimization;

namespace Botaniq
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/angular.js",
                      "~/Scripts/angular.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/fontawesome/font-awesome.min.css",
                      "~/Content/bootstrap.css",
                      "~/Content/Home.css",
                      "~/Content/Visit.css",
                      "~/Content/About.css",
                      "~/Content/Programs.css",
                      "~/Content/Endpoint.css", 
                      "~/Content/Collections.css",
                      "~/Content/Details.css", 
                      "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/Scripts").Include(
                "~/Scripts/controllers/index.controller.js",
                "~/Scripts/controllers/collections.controller.js",
                "~/Scripts/controllers/endpoint.controller.js",
                "~/Scripts/controllers/details.controller.js",
                "~/Scripts/controllers/indexService.js"));
            bundles.Add(new StyleBundle("~/app").Include(
                "~/app/components/navbar/navbar.component.js"));
        }
    }
}
