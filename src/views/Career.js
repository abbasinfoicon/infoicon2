import React from "react";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useGetCareerQuery } from "../features/career/CareerApi";

const Career = () => {

  const { data, isError, isLoading } = useGetCareerQuery();
  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {isError.error}</div>;
  if (!data) {
    return <div>No posts !!!!</div>;
  }

  return (
    <>
      <Banner title={"Career"} banner={"assets/img/slider/inner-banner.jpg"} />

      <Breadcrumb name={"Career"} />

      <div className="midCon">
        <div className="container clearfix">
          <div className="section-head-container">
            <div className="ot-heading">
              <p>
                Infoicon Technologies Pvt Ltd is very fortunate to live and work
                with you, experiencing extraordinary economic growth. Infoicon
                tremendous growth is creating exciting opportunities and
                accelerating career progression for young people.
              </p>
              <p>
                <strong>Core values drive our success</strong>
              </p>
              <p>
                Shared your core values with us and become much more important
                part in information technology environment. Infoicon always
                believes that strong values always empower an organisation. If
                you find yourself in such a position who stands out for his
                commitment, integrity and excellence as well as keeping aim to
                get acceptable standards, Join us today.
              </p>
            </div>
          </div>

          <div className="store-wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="career-page">
                  <div className="our_company">
                    <div className="career-wrap">
                      <Accordion id="faq">
                        {data.map((item, index) => {
                          return (
                            <AccordionItem className="card" key={index}>
                              <AccordionItemHeading>
                                <AccordionItemButton className="card-header">
                                  <p>{item.title}</p>
                                </AccordionItemButton>
                              </AccordionItemHeading>

                              <AccordionItemPanel className="card-body">
                                <div className="card-body-item">
                                  <h4>{item.title}</h4>
                                  <p>
                                    <span>Experience</span> : {item.experience}
                                  </p>
                                  <p>
                                    <span>Salary</span> : {item.salary}
                                  </p>
                                  <p>
                                    <span>Vacancy</span> : {item.vacancy}
                                  </p>
                                  <h5>Skills and Requirements :</h5>
                                  <ul className="skills-require inr-txt-two">
                                    <li>{item.qualification}</li>
                                    <li>{item.skills}</li>
                                  </ul>
                                  <h5>Job Description :</h5>

                                  <p>{item.desc}</p>
                                  <p>{item.desc}</p>
                                  <p>{item.desc}</p>
                                  <p>{item.desc}</p>

                                  <p>
                                    <a
                                      className="btn apply-now-btn"
                                      href="mailto:hr@infoicontechnologies.com"
                                    >
                                      Apply Now
                                    </a>
                                  </p>
                                </div>
                              </AccordionItemPanel>
                            </AccordionItem>
                          )
                        })}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
