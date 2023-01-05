import React from "react";
import { Routes, Route } from "react-router";
import About from "../views/About";
import Blog from "../views/Blog";
import BlogDetails from "../views/BlogDetails";
import Career from "../views/Career";
import Contact from "../views/Contact";
import Home from "../views/Home";
import PageNotFound from "../views/PageNotFound";
import Pages from "../views/Pages";
import Portfolio from "../views/Portfolio";
import Sitemap from "../views/Sitemap";
import Store from "../views/Store";
import Testimonials from "../views/Testimonials";

const RoutesList = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/:name/:slug" element={<Pages />} />

      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/store/:slug" element={<Store />} />
      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesList;
