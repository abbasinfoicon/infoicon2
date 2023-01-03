import React from "react";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import Sidebar from "../components/templates/Sidebar";

const Pages = () => {
  return (
    <>
      <Banner title={"PageName"} banner={"assets/img/slider/inner-banner.jpg"} />

      <Breadcrumb name={"PageName"} />

      <div className="midCon">
        <div className="container clearfix">
          <div className="service-detail-con d-flex flex-wrap">
            <div className="midRgt contct">
              <Sidebar />
            </div>

            <div className="midLft">
              <div className="aboutBig">
                Infoicon Technologies is the apt service provider for PHP
                development as we possess vast experience in the field. We offer
                unmatched services along the dedicated and highly professional
                team of experts so, hiring us will be a reasonable decision to
                help your business grow on web.
              </div>
              <div className="content-wrap">
                <div className="our_company">
                  <p>
                    PHP development is a highly cost effective and rapid web
                    application development environment that will surely boost
                    up the business performance within the time frame. Most of
                    all, if the project is handled in a proper manner and
                    systematically then it will be cost effective too. The team
                    of highly qualified and expert professionals provides the
                    entire functional service range to the client.
                  </p>
                  <div className="img_box">
                    <img
                      className="fr-dii fr-fin"
                      src="assets/img/page/php-development.gif"
                    />
                  </div>
                  <ul className="inr-txt-two">
                    <li>PHP application development</li>
                    <li>PHP e-Commerce development</li>
                    <li>Shopping cart development</li>
                    <li>PHP website development</li>
                    <li>Custom PHP product development</li>
                    <li>PHP content management system development</li>
                    <li>PHP programming and scripting</li>
                  </ul>
                  <p>
                    Infoicon Technologies has tremendous knowledge and skills in
                    PHP web development, PHP software development and PHP
                    application development. Our aim is to provide effective web
                    solutions that cover all functionalities that our client
                    needs.
                  </p>
                  <p>
                    <strong>&nbsp;Why PHP?</strong>
                  </p>
                  <p>
                    Underlying are the factors due to which PHP development is
                    generally preferred:
                  </p>
                  <ul className="inr-txt-two">
                    <li>Low development and maintenance cost</li>
                    <li>Develop all kind of web application</li>
                    <li>
                      It is an open source development environment so it is easy
                      to upgrade the same
                    </li>
                    <li>
                      Easily usable and lift weighted application development
                      environment
                    </li>
                    <li>One of the most popular web development languages</li>
                  </ul>
                  <p>
                    There are numerous benefits of PHP development in term of
                    web or application development and of course it is effective
                    in monetary terms to client as well. Infoicon Technologies
                    is one of the most prominent and highly demanded PHP
                    development companies in industry. We offer custom PHP web
                    development services with best team of PHP programming
                    professionals. Most of all we deliver cutting-edge solutions
                    for clients in varied business perpendicular around the
                    globe.
                  </p>
                  <p>
                    At Infoicon Technologies, we have a team of expert PHP
                    developers who are well versed with the different platforms
                    of PHP. Our proficient team has extensive experience in
                    providing PHP development services that allow us to meet the
                    high expectations of our clients every time. Our
                    professional developers are well-trained in working with the
                    latest updates of PHP frameworks, and hence can ensure about
                    offering efficient services to help you achieve your
                    business goals effectively.
                  </p>
                  <p>
                    We are equipped with a team that is passionate about what
                    they do, and very much dedicated towards providing robust,
                    interactive, and affordable PHP development services that
                    completely fits in your business needs. We have years of
                    experience in this field that has allowed us to gain immense
                    expertise in providing our clients with the top notch web
                    solutions using this framework. Our professionals keep
                    themselves up-to-date with the latest version of PHP
                    process; so that they can help you with the unmatched web
                    solutions.
                  </p>
                  <p>
                    We know that the time equals money for nay business; hence
                    we strive to offer on-time delivery of projects to our
                    clients. Also, we make sure to provide 100% customer
                    satisfaction, so that we can maintain long term
                    relationships with our valuable clients. WE offer affordable
                    pricing plans for our services, and you can easily choose
                    the one depending on your specific organizational needs and
                    budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
