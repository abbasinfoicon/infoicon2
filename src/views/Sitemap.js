import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";

const Sitemap = () => {
  return (
    <>
    <Banner title={'Sitemap'} banner={"assets/img/slider/inner-banner.jpg"}/>

    <Breadcrumb name={'Sitemap'} />
      <div className="midCon">
        <div className="container clearfix">
          <div className="row sitemap-grid">
            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>About Us</h3>
                <ul>
                  <li>
                    <Link to="/about-us/software-testing">
                      Software Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us/shopware-development">
                      Shopware Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us/about-company">About Company</Link>
                  </li>
                  <li>
                    <Link to="/about-us/mission-and-vision">
                      Mission and Vision
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us/our-values">Our values</Link>
                  </li>
                  <li>
                    <Link to="/about-us/symfony-development">
                      Symfony Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us/django-development">
                      Django Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us/why-infoicon">Why Infoicon</Link>
                  </li>
                  <li>
                    <Link to="/about-us/engagement-models">
                      Engagement Models
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us/process-management">
                      Process Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/services/mobile-apps-development">
                      Mobile Apps Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/web-development">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/services/microsoft-sharepoint-framework">
                      Microsoft SharePoint Framework
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/virtual-reality">Virtual Reality</Link>
                  </li>
                  <li>
                    <Link to="/services/aws-migration">AWS Migration</Link>
                  </li>
                  <li>
                    <Link to="/services/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/hire-dedicated-team">
                      Hire Dedicated Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/gis-development">GIS Development</Link>
                  </li>
                  <li>
                    <Link to="/services/java-j2ee-development">
                      Java/j2EE Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/microsoft-azure-stack">
                      Microsoft Azure Stack
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/microsoft-azure">Microsoft Azure</Link>
                  </li>
                  <li>
                    <Link to="/services/open-source-customization">
                      Open Source Customization
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/custom-toolbar-development">
                      Custom Toolbar Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/augmented-reality-app-development">
                      Augmented Reality App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/php-development">PHP Development</Link>
                  </li>
                  <li>
                    <Link to="/services/software-development">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/-net-framework">.Net Framework</Link>
                  </li>
                  <li>
                    <Link to="/services/web-api-framework">
                      Web API Framework
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/application-maintenance-services">
                      Application Maintenance Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/artificial-intelligence">
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/agoracart-development">
                      AgoraCart Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/e-shop-development">
                      E-Shop Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/framework-development">
                      Framework Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/website-design-and-development">
                      Website Design and Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/x-cart-development">
                      X-Cart Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/staff-augmentation-services">
                      Staff Augmentation Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/prestashop-development">
                      Prestashop Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/shopify-development">
                      Shopify Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/react-native">React Native</Link>
                  </li>
                  <li>
                    <Link to="/services/flutter-app-development">
                      Flutter App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/progressive-web-app">
                      Progressive web App
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/on-demand">On Demand</Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Custom Development</h3>
                <ul>
                  <li>
                    <Link to="/custom-development/enterprise-application">
                      Enterprise Application
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-development/product-development">
                      Product Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Expertise</h3>
                <ul>
                  <li>
                    <Link to="/expertise/woocommerce-development">
                      Woocommerce Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/joomla-development">
                      Joomla Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/frog-cms-development">
                      Frog CMS Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/exponent-cms-development">
                      Exponent CMS Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/moodle-development">
                      Moodle Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/oscommerce-development">
                      OsCommerce Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/php-mvc-development">
                      PHP-MVC Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/fuelphp-development">
                      FuelPHP Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/fat-free-development">
                      Fat-Free Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/ruby-on-rails-development">
                      Ruby on Rails Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/angular-js-development">
                      Angular.js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/puremvc-framework">
                      PureMVC Framework
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/wordpress-development">
                      Wordpress Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/impress-cms-development">
                      Impress CMS Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/laravel-development">
                      Laravel Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/zend-framework">Zend Framework</Link>
                  </li>
                  <li>
                    <Link to="/expertise/node-js-development">
                      Node.js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/polymer-framework">
                      Polymer Framework
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/codeigniter-development">
                      Codeigniter Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/typo3-development">
                      Typo3 Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/drupal-development">
                      Drupal Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/cakephp-development">
                      Cakephp Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/yii-development">YII Development</Link>
                  </li>
                  <li>
                    <Link to="/expertise/mongodb-development">
                      MongoDB Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/akelos-development">
                      Akelos Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/vue-js-development">
                      Vue.js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/ember-js-development">
                      Ember.js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/express-js-development">
                      Express.js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/win-js-development">
                      Win js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/ionic-framework">Ionic Framework</Link>
                  </li>
                  <li>
                    <Link to="/expertise/magento-development">
                      Magento Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/silver-stripe-development">
                      Silver Stripe Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/prado-development">
                      Prado Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/python-development">
                      Python Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/phalcon-development">
                      Phalcon Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/zoop-development">
                      Zoop Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/simple-php-development">
                      Simple PHP Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/react-js-development">
                      React.js Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/digital-transformation">
                      Digital Transformation
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/php-expertise">PHP Expertise</Link>
                  </li>
                  <li>
                    <Link to="/expertise/opencart-development">
                      OpenCart Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/symfony-framework">
                      Symfony Framework
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/bootstrap">Bootstrap</Link>
                  </li>
                  <li>
                    <Link to="/expertise/internet-of-things">
                      Internet of Things
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/sap">SAP</Link>
                  </li>
                  <li>
                    <Link to="/expertise/opensource-technologies">
                      OpenSource Technologies
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/hybris-development">
                      Hybris Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/expertise/metaverse-avatar-development">
                      Metaverse Avatar Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Infra Services</h3>
                <ul>
                  <li>
                    <Link to="/infra-services/database-support">
                      Database Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/database-admin-support">
                      Database Admin Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/application-security">
                      Application Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/cloud-amazon">Cloud Amazon</Link>
                  </li>
                  <li>
                    <Link to="/infra-services/bpm">BPM</Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-bi">
                      Sharepoint-(BI)
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-bpm">
                      Sharepoint-(BPM)
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-custom-application-development">
                      Sharepoint Custom Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-data-migration">
                      Sharepoint Data Migration
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/network-support">
                      Network Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/system-administration-and-virtualization">
                      System Administration And Virtualization
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-enterprise-search">
                      Sharepoint Enterprise Search
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/application-support">
                      Application Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/amazon-cloud-migration">
                      Amazon Cloud Migration
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/dedicated-hosting">
                      Dedicated Hosting
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/google-cloud">Google Cloud</Link>
                  </li>
                  <li>
                    <Link to="/infra-services/owasp">OWASP</Link>
                  </li>
                  <li>
                    <Link to="/infra-services/salesforce-development">
                      Salesforce Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/salesforce-integration">
                      Salesforce Integration
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-extranet-development">
                      Sharepoint Extranet Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/sharepoint-enterprise-content-management">
                      Sharepoint Enterprise Content Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/google-apps-migration">
                      Google APPS Migration
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/vpn">VPN</Link>
                  </li>
                  <li>
                    <Link to="/infra-services/salesforce-consulting">
                      Salesforce Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/hire-a-salesforce-developer">
                      Hire A Salesforce Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/salesforce-mobile-app-development">
                      Salesforce Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/infra-services/salesforce-for-partners">
                      Salesforce For Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Highlights</h3>
                <ul>
                  <li>
                    <Link to="/highlights/bpo-services">BPO Services</Link>
                  </li>
                  <li>
                    <Link to="/highlights/it-infrastructure-services">
                      IT Infrastructure Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/highlights/news-and-events">
                      News and Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/highlights/cloud-computing">
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link to="/highlights/career">Career</Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Glimpse</h3>
                <ul>
                  <li>
                    <Link to="/glimpse/adobe-experience-manager">
                      Adobe Experience Manager
                    </Link>
                  </li>
                  <li>
                    <Link to="/glimpse/custom-development">
                      Custom Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/glimpse/big-data-analytics-solution">
                      Big Data Analytics Solution
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Industries</h3>
                <ul>
                  <li>
                    <Link to="/industries/education-and-training">
                      Education And Training
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/oil-and-gas">Oil And Gas</Link>
                  </li>
                  <li>
                    <Link to="/industries/tourism-and-hospitality">
                      Tourism And Hospitality
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/health-care">Health Care</Link>
                  </li>
                  <li>
                    <Link to="/industries/manufacturing-industry">
                      Manufacturing Industry
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/agriculture">Agriculture</Link>
                  </li>
                  <li>
                    <Link to="/industries/automobiles">Automobiles</Link>
                  </li>
                  <li>
                    <Link to="/industries/biotechnology">Biotechnology</Link>
                  </li>
                  <li>
                    <Link to="/industries/consumer-markets">
                      Consumer Markets
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/engineering">Engineering</Link>
                  </li>
                  <li>
                    <Link to="/industries/food-industry">Food Industry</Link>
                  </li>
                  <li>
                    <Link to="/industries/media-and-entertainment">
                      Media And Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/real-estate">Real Estate</Link>
                  </li>
                  <li>
                    <Link to="/industries/marketing">Marketing</Link>
                  </li>
                  <li>
                    <Link to="/industries/retail">Retail</Link>
                  </li>
                  <li>
                    <Link to="/industries/medical">Medical</Link>
                  </li>
                  <li>
                    <Link to="/industries/banking">Banking</Link>
                  </li>
                  <li>
                    <Link to="/industries/information-technologies">
                      Information Technologies
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/financial-services">
                      Financial Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/pharmaceuticals">
                      Pharmaceuticals
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/research-and-development">
                      Research And Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/science-and-technology">
                      Science And Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/spa-amp-wellness">
                      Spa &amp; Wellness
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/shopping">Shopping</Link>
                  </li>
                  <li>
                    <Link to="/industries/gems-and-jewellery">
                      Gems And Jewellery
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries/insurance">Insurance</Link>
                  </li>
                  <li>
                    <Link to="/industries/telecommunications">
                      Telecommunications
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Stores</h3>
                <ul>
                  <li>
                    <Link to="/stores/mobile-development-store">
                      Mobile Development Store
                    </Link>
                  </li>
                  <li>
                    <Link to="/stores/web-development-store">
                      Web development store
                    </Link>
                  </li>
                  <li>
                    <Link to="/stores/software-development-store">
                      Software development store
                    </Link>
                  </li>
                  <li>
                    <Link to="/stores/digital-marketing-store">
                      Digital marketing store
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Enlightenment</h3>
                <ul>
                  <li>
                    <Link to="/enlightenment/non-disclosure-agreement">
                      NON Disclosure Agreement
                    </Link>
                  </li>
                  <li>
                    <Link to="/enlightenment/white-label-partnership">
                      White Label Partnership
                    </Link>
                  </li>
                  <li>
                    <Link to="/enlightenment/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/enlightenment/legal-disclaimer">
                      Legal Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Custom Solutions</h3>
                <ul>
                  <li>
                    <Link to="/custom-solutions/internet-software-development">
                      Internet Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/microsoft-development">
                      Microsoft Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/dnn-development-services">
                      DNN Development Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/financial-accounting">
                      Financial Accounting
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/sugarcrm-consulting">
                      SugarCRM Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/microsoft-dynamics">
                      Microsoft Dynamics
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/content-management-system">
                      Content Management System
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/html5-development">
                      HTML5 Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/iphone-apps-development">
                      iPhone Apps Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/unity-development">
                      Unity Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/it-consulting">
                      IT Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/application-migration">
                      Application Migration
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/trading-services">
                      Trading Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/education-software-products">
                      Education Software Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/volusion-development">
                      Volusion Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/social-networking-applications">
                      Social Networking Applications
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/apple-smart-tv-app-development">
                      Apple Smart TV App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/android-application-development">
                      Android Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/android-smart-tv-app-development">
                      Android Smart TV App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/hire-mobile-app-developer">
                      Hire Mobile App Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/custom-software-development">
                      Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/offshore-development-center">
                      Offshore Development Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/quality-control-services">
                      Quality Control Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/database-programing">
                      Database Programming
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/enterprise-mobility">
                      Enterprise Mobility
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/hybrid-app-development">
                      Hybrid App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/sugarcrm-development">
                      SugarCRM Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/knowledge-management">
                      Knowledge Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/product-authentication-solution">
                      Product Authentication Solution
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/dotnetnuke-development">
                      DotNetNuke Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/hrms-and-payroll-system-design">
                      HRMS And Payroll System Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/apps-development-process">
                      Apps Development Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/windows-app-development">
                      Windows App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/mobile-website-development">
                      Mobile Website Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom-solutions/apps-showcase">
                      Apps Showcase
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>GIS Development</h3>
                <ul>
                  <li>
                    <Link to="/gis-development/commercial-data">
                      Commercial Data
                    </Link>
                  </li>
                  <li>
                    <Link to="/gis-development/operational-data-readiness">
                      Operational Data Readiness
                    </Link>
                  </li>
                  <li>
                    <Link to="/gis-development/enterprise-data-integration">
                      Enterprise Data Integration
                    </Link>
                  </li>
                  <li>
                    <Link to="/gis-development/intelligent-data-conflation">
                      Intelligent Data Conflation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Aws Migration</h3>
                <ul>
                  <li>
                    <Link to="/aws-migration/aws-cloud-management">
                      AWS cloud management
                    </Link>
                  </li>
                  <li>
                    <Link to="/aws-migration/microsoft-azure-web-services">
                      Microsoft Azure Web Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/aws-migration/aws-cloud-migration">
                      AWS cloud migration
                    </Link>
                  </li>
                  <li>
                    <Link to="/aws-migration/aws-consulting-services">
                      AWS Consulting Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Digital Marketing</h3>
                <ul>
                  <li>
                    <Link to="/digital-marketing/ppc-plans">PPC Plans</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/seo-results">Seo Results</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/voice-search-seo-package">
                      Voice Search SEO Package
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/social-marketing">
                      Social Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/smo-likers">SMO Likers</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/youtube-channel-promotion">
                      YouTube Channel Promotion
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/e-commerce-seo-plans">
                      E commerce SEO Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/wikipedia-writing-services">
                      Wikipedia Writing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/seo-case-study">
                      SEO Case Study
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/voice-search-seo">
                      Voice Search SEO
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/smm-packages">
                      SMM Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/aso-packages">
                      ASO Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/penguin-and-panda-recovery-plan">
                      Penguin and Panda Recovery plan
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/seo-services">
                      SEO Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/reputation-brand-management">
                      Reputation &amp; Brand Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/pay-per-click-services">
                      Pay Per Click Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/app-store-optimization">
                      App Store Optimization
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/unnatural-or-toxic-link-removal">
                      Unnatural Or Toxic Link Removal
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/facebook-paid-advertising">
                      Facebook Paid Advertising
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/web-content-writing">
                      Web Content Writing
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/voice-search-marketing">
                      Voice Search Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/voice-search-process">
                      Voice Search Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/smo-plans">SMO Plans</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/e-book-writing-services">
                      E-book Writing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/ppt">PPT</Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/brand-needs-a-voice-strategy">
                      Brand Needs A Voice Strategy
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/affordable-seo-packages">
                      Affordable SEO Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/orm-packages">
                      ORM Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-marketing/seo-packages">
                      SEO Packages
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Consulting</h3>
                <ul>
                  <li>
                    <Link to="/consulting/sharepoint-development">
                      Sharepoint development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Cloud Computing</h3>
                <ul>
                  <li>
                    <Link to="/cloud-computing/cloud-product-development">
                      Cloud Product Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/cloud-computing/cloud-application-development">
                      Cloud Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/cloud-computing/cloud-management-services">
                      Cloud Management Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/cloud-computing/enterprise-cloud-consulting">
                      Enterprise Cloud Consulting
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Products</h3>
                <ul>
                  <li>
                    <Link to="/products/hrm">HRM</Link>
                  </li>
                  <li>
                    <Link to="/products/crm">CRM</Link>
                  </li>
                  <li>
                    <Link to="/products/mall-parking-management-system">
                      Mall Parking Management System
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/multiple-language-learning-system">
                      Multiple Language Learning System
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/online-education-apps">
                      Online Education APPS
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/doctor-appointment-booking-system">
                      Doctor Appointment Booking System
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/shopping-cart-management-apps">
                      Shopping Cart Management Apps
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/employees-tracking-system">
                      Employees Tracking System
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/service-management-system">
                      Service Management System
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/document-management-systems">
                      Document Management Systems
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/school-bus-vehicle-tracking-system">
                      School Bus &amp; Vehicle Tracking system
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/restaurant-management-system">
                      Restaurant Management system
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/task-management-systems">
                      Task Management Systems
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/erp">ERP</Link>
                  </li>
                  <li>
                    <Link to="/products/online-taxi-booking-apps">
                      Online TAXI Booking Apps
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/shopping-mall-management-and-affiliate-program">
                      Shopping Mall management and Affiliate program
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/cinema-booking-system">
                      Cinema Booking System
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Enterprises Mobility</h3>
                <ul>
                  <li>
                    <Link to="/enterprises-mobility/ipad-apps-development">
                      ipad apps development
                    </Link>
                  </li>
                  <li>
                    <Link to="/enterprises-mobility/mobile-games-development">
                      Mobile Games Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/enterprises-mobility/mobile-app-dedicated-team-hire">
                      Hire Mobile App Developer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Digital Transformation</h3>
                <ul>
                  <li>
                    <Link to="/digital-transformation/virtual-reality-apps-development">
                      Virtual reality apps Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/digital-transformation/augmented-reality-apps-development">
                      Augmented reality apps development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-3">
              <div className="sitemap-body">
                <h3>Big Data</h3>
                <ul>
                  <li>
                    <Link to="/big-data/data-science">Data Science</Link>
                  </li>
                  <li>
                    <Link to="/big-data/big-data-solutions">
                      Big Data Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/big-data/big-data-implementation">
                      Big Data Implementation
                    </Link>
                  </li>
                  <li>
                    <Link to="/big-data/big-data-consulting">
                      Big Data Consulting
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sitemap-body">
                <h3>Software Testing</h3>
                <ul>
                  <li>
                    <Link to="/software-testing/web-application-testing">
                      Web Application Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/e-learning">E Learning</Link>
                  </li>
                  <li>
                    <Link to="/software-testing/cross-industry-testing">
                      Cross Industry Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/saas-cloud-testing">
                      SAAS/ Cloud Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/our-working-process">
                      Our Working Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/database-platform-testing">
                      Database &amp; Platform Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/cloud-testing">
                      Cloud Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/retail-testing">
                      Retail Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/outsourced-software-testing-services">
                      Outsourced Software Testing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/why-our-testing-services">
                      Why Our Testing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/functional-testing">
                      Functional Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/performance-testing">
                      Performance Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/system-testing">
                      System Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/bfsi-testing-services">
                      BFSI Testing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/healthcare-testing">
                      Healthcare Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/manufacturing">
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/component-unit-testing">
                      Component &amp; Unit Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/mobile-app-testing">
                      Mobile App Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/automation-testing">
                      Automation Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/usability-content-testing">
                      Usability &amp; Content Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/localization-testing">
                      Localization Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/integration-testing">
                      Integration Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/security-testing">
                      Security Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/e-commerce-auction">
                      E-Commerce &amp; Auction
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/mobile-testing">
                      Mobile Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/media-publishing-testing">
                      Media &amp; Publishing Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/gaming-testing">
                      Gaming Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/social-media-testing">
                      Social Media Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/software-testing/telecom">Telecom</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
