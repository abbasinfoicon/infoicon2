import React from "react";
import { Link } from "react-router-dom";
import { useGetPortfolioQuery } from "../../../features/portfolio/portfolioApi";

const OurCaseStudy = () => {
  const { data, isError, isLoading } = useGetPortfolioQuery();
  // console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {isError.error}</div>;
  if (!data) {
    return <div>No posts !!!!</div>;
  }

  return (
    <section className="midCon pfCon pt50">
      <div className="projects-wrap">
        <div className="section-head text-center text-white">
          <h5>
            <i className="fas fa-file-invoice"></i> Our Case Study
          </h5>
        </div>

        <h5 className="mainHd tac">Introduce Our Projects</h5>

        <div className="hdText tac mb20">
          We build and transform your business with our leading services and
          over 12+ years of business experience. With affordable technology
          solutions for every business, we create the latest business solutions
          tailored for every client’s need to add value, simplify business
          processes and accelerate productions. We cater our service to
          Real-estate, Marketing, Health Care, Oil & Gas, Automobile, Financial,
          Shopping, Food, Media & Entertainment and 1000+ more industries.
        </div>

        <div className="flexBox">
          <div className="pfLft">
            {data.homePortfolio.slice(0, 1).map((item, index) => {
              return (
                <div
                  className="pfInner"
                  style={{
                    backgroundImage: `url(${item.bgimg})`,
                  }}
                  key={index}
                >
                  <img src={item.bgimg} alt="" />
                  <div className="name">
                    <img src={item.logo} alt="logo" />
                  </div>
                  <div className="overBox">
                    <div>
                      <div className="hd">
                        <img src={item.logo} alt="logo" />
                      </div>
                      <div className="mb20">{item.desc}</div>
                      <div>
                        <Link to="/portfolio" className="learnMore">
                          <span>{item.title}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pfRgt">
            <div className="pfRgtTopC flexBox">
              {data.homePortfolio.slice(1, 6).map((item, index) => {
                return (
                  <div
                    className={
                      index == 2 || index == 3 || index == 4
                        ? "pfRgtBot"
                        : "pfRgtTop"
                    }
                    key={index}
                  >
                    <div
                      className="pfInner"
                      style={{
                        backgroundImage: `url(${item.bgimg})`,
                      }}
                    >
                      <img src={item.bgimg} alt="" />
                      <div className="name">
                        <img src={item.logo} alt="logo" />
                      </div>
                      <div className="overBox">
                        <div>
                          <div className="hd">
                            <img src={item.logo} alt="logo" />
                          </div>
                          <div className="mb20">{item.desc}</div>
                          <div>
                            <Link to="/portfolio" className="learnMore">
                              <span>{item.title}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCaseStudy;
