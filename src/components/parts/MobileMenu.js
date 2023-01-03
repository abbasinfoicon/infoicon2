import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [menu, setMenu] = useState(null);

  return (
    <ul id="sidebar-menu" className="popupMenu">
      <li className="sidebar_li des_hide" onClick={() => setMenu(1)}>
        <Link to="/">About us</Link>
        <ul className={`dropdown-des-li ${menu === 1 ? "active" : ""}`}>
          <li>
            <Link to="#" className="navClr">
              About Company
            </Link>
          </li>
          <li>
            <Link to="#" className="navClr">
              Mission and Vision
            </Link>
          </li>
          <li>
            <Link to="#" className="navClr">
              Our Values
            </Link>
          </li>
          <li>
            <Link to="#" className="navClr">
              Contact Us
            </Link>
          </li>
        </ul>
      </li>

      <li className="sidebar_li des_hide" onClick={() => setMenu(2)}>
        <Link to="/">Services</Link>
        <ul className={`dropdown-des-li ${menu === 2 ? "active" : ""}`}>
          <li>
            <Link to="/">
              <strong>Mobility Solution</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Mobile Apps Development</Link>
              </li>
              <li>
                <Link to="/">Open Source Customization</Link>
              </li>
              <li>
                <Link to="/">Web Development</Link>
              </li>
              <li>
                <Link to="/">Custom Toolbar Development</Link>
              </li>
              <li>
                <Link to="/">Augmentation Really</Link>
              </li>
              <li>
                <Link to="/">Virtual Reality</Link>
              </li>
              <li>
                <Link to="/">AWS Migration</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>Tech Expertise</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">PHP Development</Link>
              </li>
              <li>
                <Link to="/">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/">Software Development</Link>
              </li>
              <li>
                <Link to="/">.Net Framework</Link>
              </li>
              <li>
                <Link to="/">Web API Framework</Link>
              </li>
              <li>
                <Link to="/">Application Maintenance Services</Link>
              </li>
              <li>
                <Link to="/">Hire Dedicated Team</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>Solution Design</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">GIS Development</Link>
              </li>
              <li>
                <Link to="/">Artificial Intelligence</Link>
              </li>
              <li>
                <Link to="/">Java/j2EE Development</Link>
              </li>
              <li>
                <Link to="/">Microsoft SharePoint Framework</Link>
              </li>
              <li>
                <Link to="/">Microsoft Azure Stack</Link>
              </li>
              <li>
                <Link to="/">Microsoft Azure</Link>
              </li>
              <li>
                <Link to="/">Software Testing</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li className="sidebar_li des_hide" onClick={() => setMenu(3)}>
        <Link to="/">Expertise</Link>
        <ul className={`dropdown-des-li ${menu === 3 ? "active" : ""}`}>
          <li>
            <Link to="/">
              <strong>CMS Development</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Woocommerce Development</Link>
              </li>
              <li>
                <Link to="/">Magento Development</Link>
              </li>
              <li>
                <Link to="/">Codeigniter Development</Link>
              </li>
              <li>
                <Link to="/">Wordpress Development</Link>
              </li>
              <li>
                <Link to="/">Joomla Development </Link>
              </li>
              <li>
                <Link to="/">Typo3 Development</Link>
              </li>
              <li>
                <Link to="/">Drupal Development</Link>
              </li>
              <li>
                <Link to="/">Frog CMS Development</Link>
              </li>
              <li>
                <Link to="/">Silver Stripe Development</Link>
              </li>
              <li>
                <Link to="/">Impress CMS Development</Link>
              </li>
              <li>
                <Link to="/">Exponent CMS Development</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>PHP Expertise</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Cakephp Development</Link>
              </li>
              <li>
                <Link to="/">YII Development</Link>
              </li>
              <li>
                <Link to="/">Moodle Development</Link>
              </li>
              <li>
                <Link to="/">OsCommerce Development</Link>
              </li>
              <li>
                <Link to="/">Symfony Development</Link>
              </li>
              <li>
                <Link to="/">Django Development</Link>
              </li>
              <li>
                <Link to="/">Shopware Development</Link>
              </li>
              <li>
                <Link to="/">Prado Development</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>Sforce Development</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Python Development</Link>
              </li>
              <li>
                <Link to="/">MongoDB Development</Link>
              </li>
              <li>
                <Link to="/">Laravel Development</Link>
              </li>
              <li>
                <Link to="/">PHP-MVC Development</Link>
              </li>
              <li>
                <Link to="/">Zend Framwork</Link>
              </li>
              <li>
                <Link to="/">Phalcon Development</Link>
              </li>
              <li>
                <Link to="/">FuelPHP Development</Link>
              </li>
              <li>
                <Link to="/">Fat-Free Development</Link>
              </li>
              <li>
                <Link to="/">Zoop Development</Link>
              </li>
              <li>
                <Link to="/">Simple PHP Development</Link>
              </li>
              <li>
                <Link to="/">Akelos Development</Link>
              </li>
              <li>
                <Link to="/">Ruby on Rails Development</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>js Libraries & Frameworks</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Angular.js Development</Link>
              </li>
              <li>
                <Link to="/">React.js Development</Link>
              </li>
              <li>
                <Link to="/">Vue.js Development</Link>
              </li>
              <li>
                <Link to="/">Node.js Development</Link>
              </li>
              <li>
                <Link to="/">Ember.js Development</Link>
              </li>
              <li>
                <Link to="/">Express.js Development</Link>
              </li>
              <li>
                <Link to="/">Win js Development</Link>
              </li>
              <li>
                <Link to="/">Polymer Framework</Link>
              </li>
              <li>
                <Link to="/">PureMVC Framework</Link>
              </li>
              <li>
                <Link to="/">Ionic Framework</Link>
              </li>
              <li>
                <Link to="/">Bootstrap</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li className="sidebar_li des_hide" onClick={() => setMenu(4)}>
        <Link to="/">Infra Services</Link>
        <ul className={`dropdown-des-li ${menu === 4 ? "active" : ""}`}>
          <li>
            <Link to="/">
              <strong>Backend Support</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Network Support</Link>
              </li>
              <li>
                <Link to="/">Database Support</Link>
              </li>
              <li>
                <Link to="/">Database Admin Support </Link>
              </li>
              <li>
                <Link to="/">Application Support</Link>
              </li>
              <li>
                <Link to="/">System Administration And Virtualization</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>Cloud Services</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Amazon Cloud Migration</Link>
              </li>
              <li>
                <Link to="/">Google APPS Migration</Link>
              </li>
              <li>
                <Link to="/">VPN</Link>
              </li>
              <li>
                <Link to="/">Dedicated Hosting</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">
              <strong>Sforce Development</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Application Security</Link>
              </li>
              <li>
                <Link to="/">Cloud Amazon</Link>
              </li>
              <li>
                <Link to="/">Google Cloud</Link>
              </li>
              <li>
                <Link to="/">OWASP</Link>
              </li>
              <li>
                <Link to="/">BPM</Link>
              </li>
              <li>
                <Link to="/">Salesforce Consulting</Link>
              </li>
              <li>
                <Link to="/">Salesforce Development</Link>
              </li>
              <li>
                <Link to="/">Salesforce Integration</Link>
              </li>
              <li>
                <Link to="/">Salesforce Consulting</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <strong>Sharepoint development</strong>
            </Link>
            <ul>
              <li>
                <Link to="/">Hire A Salesforce Developer</Link>
              </li>
              <li>
                <Link to="/">Salesforce Mobile App Development</Link>
              </li>
              <li>
                <Link to="/">Salesforce For Partners</Link>
              </li>
              <li>
                <Link to="/">Sharepoint Enterprise Search</Link>
              </li>
              <li>
                <Link to="/">Sharepoint-(BI)</Link>
              </li>
              <li>
                <Link to="/">Sharepoint-(BPM)</Link>
              </li>
              <li>
                <Link to="/">Sharepoint Custom Application Development</Link>
              </li>
              <li>
                <Link to="/">Sharepoint Extranet Development</Link>
              </li>
              <li>
                <Link to="/">Sharepoint Data Migration</Link>
              </li>
              <li>
                <Link to="/">Sharepoint Enterprise Content Management</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li className="sidebar_li des_hide" onClick={() => setMenu(5)}>
        <Link to="/">Industries</Link>
        <ul className={`dropdown-des-li ${menu === 5 ? "active" : ""}`}>
          <li>
            <Link to="/">Health Care</Link>
          </li>
          <li>
            <Link to="/">Marketing</Link>
          </li>
          <li>
            <Link to="/">Retail</Link>
          </li>
          <li>
            <Link to="/">Shopping</Link>
          </li>
          <li>
            <Link to="/">Medical</Link>
          </li>
          <li>
            <Link to="/">Manufacturing Industry</Link>
          </li>
          <li>
            <Link to="/">Agriculture</Link>
          </li>
          <li>
            <Link to="/">Automobiles</Link>
          </li>
          <li>
            <Link to="/">Banking</Link>
          </li>
          <li>
            <Link to="/">Biotechnology</Link>
          </li>
          <li>
            <Link to="/">Information Technologies</Link>
          </li>
          <li>
            <Link to="/">Consumer Markets</Link>
          </li>
          <li>
            <Link to="/">Education And Training</Link>
          </li>
          <li>
            <Link to="/">Engineering</Link>
          </li>
          <li>
            <Link to="/">Financial Services</Link>
          </li>
          <li>
            <Link to="/">Food Industry</Link>
          </li>
          <li>
            <Link to="/">Gems And Jewellery</Link>
          </li>
          <li>
            <Link to="/">Insurance</Link>
          </li>
          <li>
            <Link to="/">Media And Entertainment</Link>
          </li>
          <li>
            <Link to="/">Oil And Gas</Link>
          </li>
          <li>
            <Link to="/">Pharmaceuticals</Link>
          </li>
          <li>
            <Link to="/">Real Estate</Link>
          </li>
          <li>
            <Link to="/">Research And Development</Link>
          </li>
          <li>
            <Link to="/">Science And Technology</Link>
          </li>
          <li>
            <Link to="/">Spa &amp; Wellness</Link>
          </li>
          <li>
            <Link to="/">Telecommunications</Link>
          </li>
          <li>
            <Link to="/">Tourism And Hospitality</Link>
          </li>
        </ul>
      </li>

      <li className="sidebar_li" onClick={() => setMenu(6)}>
        <Link to="/">Products</Link>
        <ul className={`dropdown-des-li ${menu === 6 ? "active" : ""}`}>
          <li>
            <Link to="/">Document Management Systems</Link>
          </li>
          <li>
            <Link to="/">Task Management Systems</Link>
          </li>
          <li>
            <Link to="/">HRM</Link>
          </li>
          <li>
            <Link to="/">CRM</Link>
          </li>
          <li>
            <Link to="/">ERP</Link>
          </li>
          <li>
            <Link to="/">Online TAXI Booking Apps</Link>
          </li>
          <li>
            <Link to="/">Shopping Mall management and Affiliate program</Link>
          </li>
          <li>
            <Link to="/">Mall Parking Management System</Link>
          </li>
          <li>
            <Link to="/">School Bus & Vehicle Tracking system</Link>
          </li>
          <li>
            <Link to="/">Multiple Language Learning System</Link>
          </li>
          <li>
            <Link to="/">Restaurant Management system</Link>
          </li>
          <li>
            <Link to="/">Shopping Cart Management Apps</Link>
          </li>
          <li>
            <Link to="/">Online Education APPS</Link>
          </li>
          <li>
            <Link to="/">Cinema Booking System</Link>
          </li>
          <li>
            <Link to="/">Employees Tracking System</Link>
          </li>
          <li>
            <Link to="/">Service Management System</Link>
          </li>
          <li>
            <Link to="/">Doctor Appointment Booking System</Link>
          </li>
        </ul>
      </li>

      <li className="sidebar_li" onClick={() => setMenu(7)}>
        <Link to="/">JS Libraries</Link>
        <ul className={`dropdown-des-li ${menu === 7 ? "active" : ""}`}>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Angular.js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              React.js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Vue.js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#l" className="navClr">
              Node.js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Ember.js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Express.js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Win js Development
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Polymer Framework
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              PureMVC Framework
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Ionic Framework
            </Link>
          </li>
          <li className="hdrtop">
            <Link to="#" className="navClr">
              Bootstrap
            </Link>
          </li>
        </ul>
      </li>

      <li className="sidebar_li" onClick={() => setMenu(8)}>
        <Link to="/">Software Testing</Link>
        <ul className={`dropdown-des-li ${menu === 8 ? "active" : ""}`}>
          <li>
            <Link to="/">Outsourced Software Testing Services</Link>
          </li>
          <li>
            <Link to="/">Why Our Testing Services</Link>
          </li>
          <li>
            <Link to="/">Our Working Process</Link>
          </li>
          <li>
            <Link to="/">Component & Unit Testing</Link>
          </li>
          <li>
            <Link to="/">Mobile App Testing</Link>
          </li>
          <li>
            <Link to="/">Web Application Testing</Link>
          </li>
          <li>
            <Link to="/">Functional Testing</Link>
          </li>
          <li>
            <Link to="/">Automation Testing</Link>
          </li>
          <li>
            <Link to="/">Usability & Content Testing</Link>
          </li>
          <li>
            <Link to="/">Localization Testing</Link>
          </li>
          <li>
            <Link to="/">Integration Testing</Link>
          </li>
          <li>
            <Link to="/">Security Testing</Link>
          </li>
          <li>
            <Link to="/">Performance Testing</Link>
          </li>
          <li>
            <Link to="/">System Testing</Link>
          </li>
          <li>
            <Link to="/">Database & Platform Testing</Link>
          </li>
          <li>
            <Link to="/">Cloud Testing</Link>
          </li>
          <li>
            <Link to="/">E-Commerce & Auction</Link>
          </li>
          <li>
            <Link to="/">BFSI Testing Services</Link>
          </li>
          <li>
            <Link to="/">E Learning</Link>
          </li>
          <li>
            <Link to="/">Cross Industry Testing</Link>
          </li>
          <li>
            <Link to="/">SAAS/ Cloud Testing</Link>
          </li>
          <li>
            <Link to="/">Mobile Testing</Link>
          </li>
          <li>
            <Link to="/">Media & Publishing Testing</Link>
          </li>
          <li>
            <Link to="/">Retail Testing</Link>
          </li>
          <li>
            <Link to="/">Gaming Testing</Link>
          </li>
          <li>
            <Link to="/">Social Media Testing</Link>
          </li>
          <li>
            <Link to="/">Healthcare Testing</Link>
          </li>
          <li>
            <Link to="/">Manufacturing</Link>
          </li>
          <li>
            <Link to="/">Telecom</Link>
          </li>
        </ul>
      </li>

      <li className="sidebar_li" onClick={() => setMenu(9)}>
        <Link to="/">Cloud Computing</Link>
        <ul className={`dropdown-des-li ${menu === 9 ? "active" : ""}`}>
          <li>
            <Link to="/">Enterprise Cloud Consulting</Link>
          </li>
          <li>
            <Link to="/">Cloud Management Services</Link>
          </li>
          <li>
            <Link to="/">Cloud Product Development</Link>
          </li>
          <li>
            <Link to="/">Cloud Application Development</Link>
          </li>
        </ul>
      </li>

      <li className="sidebar_li" onClick={() => setMenu(10)}>
        <Link to="/">AWS-Migration</Link>
        <ul className={`dropdown-des-li ${menu === 10 ? "active" : ""}`}>
          <li>
            <Link to="/">AWS Cloud Migration</Link>
          </li>
          <li>
            <Link to="/">AWS Consulting Services</Link>
          </li>
          <li>
            <Link to="/">Google APPS Migration</Link>
          </li>
          <li>
            <Link to="/">Microsoft Azure Web Services</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/">Testimonials</Link>
      </li>

      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
