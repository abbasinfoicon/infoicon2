import React from "react";
import { useGetConactQuery } from "../../features/contact/contactApi";

const Locations = () => {
  const { data, isError, isLoading } = useGetConactQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {isError.error}</div>;
  if (!data) {
    return <div>No posts !!!!</div>;
  }

  return (
    <div className="midCon office-locations">
      <div className="container">
        <div className="section-head-container">
          <div className="ot-heading">
            <span>
              <i className="fa fa-map-markar"></i> Office Locations
            </span>
            <h2>Our Locations</h2>
          </div>
        </div>

        <div className="row">
          {data.location.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-12 col-lg-4" key={index}>
                <div className="location-col">
                  <figure>
                    <img src={item.img} alt={item.country} />
                  </figure>
                  <div className="location-content">
                    <h4>
                      <img src={item.flag} alt={item.country} width="25" /> {item.country}
                    </h4>
                    <p>{item.desc}</p>
                    <ul>
                      <li>
                        <span>Sales : </span>
                        {item.sales}
                      </li>
                      <li>
                        <span>Enquiry : </span>
                        {item.enquiry}
                      </li>
                      <li>
                        <span>HR : </span>
                        {item.hr}
                      </li>
                      <li>
                        <span>Phone(IN) : </span>
                        {item.phone}
                      </li>
                      {item.mobile == "" ? (
                        ""
                      ) : (
                        <li>
                          <span>Mobile : </span>
                          {item.mobile}
                        </li>
                      )}
                      <li>
                        <span>Email : </span>
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Locations;
