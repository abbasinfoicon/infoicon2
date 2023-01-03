import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Awards from "../Awards";

const OurService = () => {
  return (
    <section
      className="midCon pt50 service-wrap"
      style={{ backgroundImage: "url(assets/img/bg3.jpg)" }}
    >
      <div className="home-container">
        <div className="section-head text-center text-white">
          <h5>
            <i className="fas fa-cogs"></i> OUR SERVICES
          </h5>
        </div>
        <h5 className="mainHd tac">What We Provide</h5>
        <div className="hdText tac mb20">
          Scale with the leader in next-generation digital services and IT
          consulting that brings innovative software products and digital
          solutions for businesses to uncover growth opportunities.
        </div>
      </div>

      <div className="ServiceCon pt50 pb50">
        <div className="home-container">
          <div className="flexBox">
            <div className="serviceForMob">
              <ul className="serviceList active flexBox">
                <li>
                  <a href="#">
                    <h3 className="hd">Enterprises Mobility</h3>
                  </a>
                  <ul className="flexBox serviceMobLink">
                    <li>
                      <a href="#">Mobile apps development</a>
                    </li>
                    <li>
                      <a href="#">Android apps development</a>
                    </li>
                    <li>
                      <a href="#">IOS apps development</a>
                    </li>
                    <li>
                      <a href="#">Mobile games</a>
                    </li>
                    <li>
                      <a href="#">Mobile websites dedicated team hire</a>
                    </li>
                    <li>
                      <a href="#">ipad apps development</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <h3 className="hd">Digital Transformation</h3>
                  </a>
                  <ul className="flexBox serviceMobLink">
                    <li>
                      <a href="#">Artificial Intelligence</a>
                    </li>
                    <li>
                      <a href="#">Live games development</a>
                    </li>
                    <li>
                      <a href="#">Augmented reality apps development</a>
                    </li>
                    <li>
                      <a href="#">Virtual reality apps Development</a>
                    </li>
                    <li>
                      <a href="#">AWS cloud management</a>
                    </li>
                    <li>
                      <a href="#">Lorem ipsum dolor</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <h3 className="hd">Software Testing</h3>
                  </a>
                  <ul className="flexBox serviceMobLink">
                    <li>
                      <a href="#">Component & Unit Testing</a>
                    </li>
                    <li>
                      <a href="#">Mobile App Testing</a>
                    </li>
                    <li>
                      <a href="#">Web Application Testing</a>
                    </li>
                    <li>
                      <a href="#">Automation Testing</a>
                    </li>
                    <li>
                      <a href="#">SAAS/ Cloud Testing</a>
                    </li>
                    <li>
                      <a href="#">Gaming Testing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <h3 className="hd">Consulting</h3>
                  </a>
                  <ul className="flexBox serviceMobLink">
                    <li>
                      <a href="#">Sforce Development</a>
                    </li>
                    <li>
                      <a href="#">Cloud Development</a>
                    </li>
                    <li>
                      <a href="#">Sharepoint development</a>
                    </li>
                    <li>
                      <a href="#">Sforce Development</a>
                    </li>
                    <li>
                      <a href="#">Cloud Development</a>
                    </li>
                    <li>
                      <a href="#">Sharepoint development</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flexBox">
              <Tabs className="custom_tabs">
                <div className="serviceLink">
                  <TabList>
                    <Tab>
                      <h3>Enterprises Mobility</h3>
                    </Tab>
                    <Tab>
                      <h3>Digital Transformation</h3>
                    </Tab>
                    <Tab>
                      <h3>Software Testing</h3>
                    </Tab>
                    <Tab>
                      <h3>Consulting</h3>
                    </Tab>
                  </TabList>
                </div>

                <div className="serviceMid">
                  <TabPanel>
                    <ul className="serviceList flexBox">
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/mobile-app.png"
                              alt="Mobile apps"
                              className="front"
                            />
                            <img
                              src="assets/img/mobile-app-white.png"
                              alt="Mobile apps"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Mobile apps development</h4>
                          <div className="text">
                            <p>
                              Mobile app development helps the individual
                              business or a group to build up new contacts and
                              later on use them for different marketing
                              campaigns.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/android-icon.png"
                              alt="Android apps"
                              className="front"
                            />
                            <img
                              src="assets/img/android-white-icon.png"
                              alt="Android apps"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Android apps development</h4>
                          <div className="text">
                            <p>
                              The Android Application is considered highly
                              useful with its user-friendly features and serves
                              for the most varied purposes.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/ios-icon.png"
                              alt="IOS apps"
                              className="front"
                            />
                            <img
                              src="assets/img/ios-white-icon.png"
                              alt="IOS apps"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">iOS/iPhone Apps Development</h4>
                          <div className="text">
                            <p>
                              When we are talking about the mobile technologies,
                              the one and only most playful and convenient
                              technology that comes in our mind is the most
                              advanced and latest iPhone technology.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/mobile-game-icon.png"
                              alt="Mobile games"
                              className="front"
                            />
                            <img
                              src="assets/img/mobile-game-white-icon.png"
                              alt="Mobile games"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Mobile Games Development</h4>
                          <div className="text">
                            <p>
                              We all used to get rid from all worries and
                              distresses of our lives by doing various leisure
                              activities. Playing game is one of them
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/mobile-team-icon.png"
                              alt="Mobile websites"
                              className="front"
                            />
                            <img
                              src="assets/img/mobile-team-white-icon.png"
                              alt="Mobile websites"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">
                            Hire Mobile Apps Dedicated Team
                          </h4>
                          <div className="text">
                            <p>
                              Each business requires a mobile application
                              developer to ensure its presence in the play
                              stores that millions of users are accessing
                              nowadays.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/ipad-app-icon.png"
                              alt="ipad apps"
                              className="front"
                            />
                            <img
                              src="assets/img/ipad-app-white-icon.png"
                              alt="ipad apps"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">ipad apps development</h4>
                          <div className="text">
                            <p>
                              iPad is the most assisting and entertaining source
                              in today’s generation. It brings all such
                              interactive applications to make the tasks easier
                              for the users.
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul className="serviceList flexBox">
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/artificial-intelligence-icon.png"
                              alt="Artificial Intelligence"
                              className="front"
                            />
                            <img
                              src="assets/img/artificial-intelligence-white-icon.png"
                              alt="Artificial Intelligence"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Artificial Intelligence</h4>
                          <div className="text">
                            <p>
                              Artificial Intelligence is a rapidly growing
                              technology which enables the machine to imitate
                              the human behavior so to offer the same experience
                              to the users.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/live-game-icon.png"
                              alt="Live games"
                              className="front"
                            />
                            <img
                              src="assets/img/live-game-white-icon.png"
                              alt="Live games"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Hybrid Games Development</h4>
                          <div className="text">
                            <p>
                              We, as a leading mobile app development company,
                              always strive to fulfill our client’s needs by
                              providing them with the effective services.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/augmented-reality-icon.png"
                              alt="Augmented reality"
                              className="front"
                            />
                            <img
                              src="assets/img/augmented-reality-white-icon.png"
                              alt="Augmented reality"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">
                            Augmented Reality Apps Development
                          </h4>
                          <div className="text">
                            <p>
                              Mobile technology is one of those things that has
                              truly evolved to become a popular buzz in the
                              modern digital world.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/virtual-reality-icon.png"
                              alt="Virtual reality"
                              className="front"
                            />
                            <img
                              src="assets/img/virtual-reality-white-icon.png"
                              alt="Virtual reality"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">
                            Virtual Reality Apps Development
                          </h4>
                          <div className="text">
                            <p>
                              The fact that technology is now capable of
                              creating things/objects that have never existed in
                              real life in undeniably true.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/aws-cloud-icon.png"
                              alt="AWS cloud"
                              className="front"
                            />
                            <img
                              src="assets/img/aws-cloud-white-icon.png"
                              alt="AWS cloud"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">AWS Cloud Management</h4>
                          <div className="text">
                            <p>
                              Cloud management involves methods and processes
                              that help administrators control and streamline
                              their cloud-based services.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/mobile-hire-app.png"
                              alt="Hire Mobile App Developer"
                              className="front"
                            />
                            <img
                              src="assets/img/mobile-hire-hover.png"
                              alt="Hire Mobile App Developer"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Hire Mobile App Developer</h4>
                          <div className="text">
                            <p>
                              Each business requires a mobile application
                              developer to ensure its presence in the play
                              stores that millions of users are accessing
                              nowadays
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul className="serviceList flexBox">
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/unit-testing-icon.png"
                              alt="Unit Testing"
                              className="front"
                            />
                            <img
                              src="assets/img/unit-testing-white-icon.png"
                              alt="Unit Testing"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Component & Unit Testing</h4>
                          <div className="text">
                            <p>
                              Component & Unit Testing services are a
                              fundamental part of Infoicon Technologies Pvt.
                              Ltd. to replenish our customer’s unique
                              requirements.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/mobile-app-testing-icon.png"
                              alt="Mobile App Testing"
                              className="front"
                            />
                            <img
                              src="assets/img/mobile-app-testing-white-icon.png"
                              alt="Mobile App Testing"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Mobile App Testing</h4>
                          <div className="text">
                            <p>
                              The migration of user’s interest from computers to
                              various hand held mobile devices has boosted the
                              usage of mobile applications.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/web-app-testing-icon.png"
                              alt="Web Application Testing"
                              className="front"
                            />
                            <img
                              src="assets/img/web-app-testing-white-icon.png"
                              alt="Web Application Testing"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Web Application Testing</h4>
                          <div className="text">
                            <p>
                              Websites have a primary role in a company’s
                              success, and it is supposed to be first-rated in
                              terms of quality and functionality.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/automation-testing-icon.png"
                              alt="Automation Testing"
                              className="front"
                            />
                            <img
                              src="assets/img/automation-testing-white-icon.png"
                              alt="Automation Testing"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Automation Testing</h4>
                          <div className="text">
                            <p>
                              The development team tests the software
                              application before delivering it to their
                              respective clients.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/cloud-testing-icon.png"
                              alt="Cloud Testing"
                              className="front"
                            />
                            <img
                              src="assets/img/cloud-testing-white-icon.png"
                              alt="Cloud Testing"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">SAAS/ Cloud Testing</h4>
                          <div className="text">
                            <p>
                              SaaS Cloud Testing refers to the approach used to
                              ensure the functionality of an application built
                              with the software as a service (SaaS) development
                              model.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/gaming-testing-icon.png"
                              alt="Gaming Testing"
                              className="front"
                            />
                            <img
                              src="assets/img/gaming-testing-white-icon.png"
                              alt="Gaming Testing"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Gaming Testing</h4>
                          <div className="text">
                            <p>
                              If you are an adult or a kid, each of us loves to
                              play games on our mobiles or peripherals. Games
                              for different age groups are in great use globally
                              across the world.
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul className="serviceList flexBox">
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/sforce-development-icon.png"
                              alt="Sforce Development"
                              className="front"
                            />
                            <img
                              src="assets/img/sforce-development-white-icon.png"
                              alt="Sforce Development"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Sforce Development</h4>
                          <div className="text">
                            <p>
                              In this era of Information Technology, each day,
                              new technology is arising into the market.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/cloud-development-icon.png"
                              alt="Cloud Development"
                              className="front"
                            />
                            <img
                              src="assets/img/cloud-development-white-icon.png"
                              alt="Cloud Development"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Cloud Development</h4>
                          <div className="text">
                            <p>
                              These facilities will help you to communicate with
                              your branch office employees more easily and share
                              the needed info with ease for further work.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/sharepoint-icon.png"
                              alt="Sharepoint development"
                              className="front"
                            />
                            <img
                              src="assets/img/sharepoint-white-icon.png"
                              alt="Sharepoint development"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Sharepoint development</h4>
                          <div className="text">
                            <p>
                              Most of the applications demand a Sharepoint
                              Custom Application Development as they do not
                              match with the significant SharePoint OOB
                              features.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/salesforce-developer-icon.png"
                              alt="Salesforce Developer"
                              className="front"
                            />
                            <img
                              src="assets/img/salesforce-developer-white-icon.png"
                              alt="Sforce Development"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Hire A Salesforce Developer</h4>
                          <div className="text">
                            <p>
                              You can Hire a Salesforce developer from Infoicon
                              Technologies Pvt. Ltd. To work offshore to carry
                              out your business goals.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/salesforce-integration-icon.png"
                              alt="Salesforce Integration"
                              className="front"
                            />
                            <img
                              src="assets/img/salesforce-integration-white-icon.png"
                              alt="Salesforce Integration"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Salesforce Integration</h4>
                          <div className="text">
                            <p>
                              Salesforce leverages the users to be benefited
                              from the diverse advantages in an integrated
                              manner.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <figure className="service-icon">
                            <img
                              src="assets/img/data-migration-icon.png"
                              alt="Sharepoint development"
                              className="front"
                            />
                            <img
                              src="assets/img/data-migration-white-icon.png"
                              alt="Sharepoint development"
                              className="ro"
                            />
                          </figure>
                          <h4 className="hd">Sharepoint Data Migration</h4>
                          <div className="text">
                            <p>
                              It connects the people via a number of formal and
                              informal business communities within the
                              organization or outside it.
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </TabPanel>
                </div>
              </Tabs>

              <Awards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
