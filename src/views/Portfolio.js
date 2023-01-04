import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import PortfolioLists from "../components/templates/PortfolioLists";
import axiosCall from "../components/axios";
import { useLocation, useNavigate } from "react-router";
const Portfolio = () => {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const filter = useRef(null);
  const params = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    axiosCall("portfolio").then((res) => {
      if (params.search) {
        const indus = [];
        const url = new URLSearchParams(params.search);
        if (url.get("category") && url.get("type")) {
          const filtered = res.data.portfolioList.filter((x) => {
            if (url.get("type") === "industries") {
              x.industries.map((y) => {
                if (y.list === url.get("category")) {
                  indus.push(x);
                }
              });
            } else {
              return x[url.get("type")] == url.get("category");
            }
          });
          setData([...filtered, ...indus]);
        } else {
          setData([]);
        }
      } else {
        setData([...res.data.portfolioList]);
      }

      setMenu([...res.data.portfolioList]);
    });
  }, [params.search]);

  return (
    <>
      <Banner
        title={"Portfolio"}
        banner={"assets/img/slider/inner-banner.jpg"}
      />

      <Breadcrumb name={"Portfolio"} />

      <div
        className="midCon filter-midCon"
        style={{ backgroundImage: "url(assets/img/pf_main_bg.jpg)" }}
      >
        <div className="container clearfix">
          <div className="service-detail-con d-flex flex-wrap">
            <div className="midRgt contct">
              <PortfolioLists data={menu} />
            </div>

            <div className="filter d-flex justify-content-end">
              <select
                name="technologies"
                id="technologies"
                className="portfolio-select-filter"
                ref={filter}
              >
                <option value="">All Technologies</option>
                {menu.map((item, index) => {
                  return (
                    <option
                      value={`type=technologies&category=${item.technologies}`}
                      key={index}
                    >
                      {item.technologies}
                    </option>
                  );
                })}
              </select>
              <input
                className="portfolio-filter formBtn smll"
                type="submit"
                value="Filter"
                onClick={() =>
                  navigate({
                    pathname: "/portfolio",
                    search: filter.current.value.toString(),
                  })
                }
              />
            </div>

            <div className="midLft">
              <ul id="casestudy" className="newPflist clearfix">
                {data.map((item, index) => {
                  return (
                    <li className="eqHeight wow fadeInDown" key={index}>
                      <div className="portfolio_list">
                        <div className="imageBg">
                          <div className="img-style">
                            <img className="img-fluid" src={item.img} />
                          </div>
                          <a href={item.link} target="_blank">
                            Go Live
                          </a>
                        </div>
                        <div className="newPfDet">
                          <div className="hd">
                            <a target="_blank" href={item.link}>
                              {item.name}
                            </a>
                          </div>
                          <div className="tagBx expertise">
                            <strong>Services:</strong>
                            <span>{item.service}</span>
                          </div>
                          <div className="tagBx verticals">
                            <strong>Industries:</strong>
                            {item.industries.map((item, index) => {
                              return <span key={index}>{item.list}</span>;
                            })}
                          </div>
                          <div className="tagBx technologies">
                            <strong>Technologies:</strong>
                            <span>{item.technologies}</span>
                          </div>
                          <div className="txt">{item.name}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
