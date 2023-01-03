import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import { useGetSignleStoreQuery } from "../features/store/storeApi";

const Store = () => {
  const params = useParams();
  const { data, isError, isLoading } = useGetSignleStoreQuery(params.slug);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {data.error.error}</div>;

  return data.map((item) => {
    return (
      <>
        <Banner
          title={item.title}
          banner={
            item.banner ? item.banner : "assets/img/slider/inner-banner.jpg"
          }
        />

        <Breadcrumb name={item.title} />

        <div className="midCon">
          <div className="container clearfix">
            <div className="section-head-container">
              <div className="ot-heading">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>

            <div className="store-wrapper">
              <div className="row">
                {item.list.map((item, index) => {
                  return (
                    <div
                      className="col-sm-12 col-md-6 col-lg-3 pl-0 pr-0"
                      key={index}
                    >
                      <Link
                        to={`/store/${item.slug}`}
                        className="services-single-items"
                      >
                        <div className="services-single-content">
                          <div className="services-single-icon">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="fr-fic fr-dii"
                            />
                          </div>
                          <div className="services-content-inner">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default Store;
