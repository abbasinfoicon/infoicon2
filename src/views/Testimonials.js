import React from "react";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import Sidebar from "../components/templates/Sidebar";
import { useGetTestimonialQuery } from "../features/testimonial.js/testimonialApi";

const Testimonials = () => {
  const { data, isError, isLoading } = useGetTestimonialQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {isError.error}</div>;
  if (!data) {
    return <div>No posts !!!!</div>;
  }
  return (
    <>
      <Banner
        title={"Testimonials"}
        banner={"assets/img/slider/inner-banner.jpg"}
      />

      <Breadcrumb name={"Testimonials"} />
      <div className="midCon">
        <div className="container clearfix">
          <div className="service-detail-con d-flex flex-wrap">
            <div className="midRgt contct">
              <Sidebar />
            </div>

            <div className="midLft">
              <div className="content-wrap">
                {/* Video Testimonial */}
                <div className="testimonial_blk_youtube">
                  <div className="aboutBig">Video Testimonials</div>
                  <div className="single row">
                    {
                      data.map((item, index) => {
                        return (
                          (item.video === '') ? '' : (
                            <div className="col-sm-3 cl_video" key={index}>
                              <div className="bubble">
                                <iframe
                                  width="100%"
                                  height="280"
                                  data-toggle="tooltip"
                                  title=""
                                  src={`https://www.youtube.com/embed/${item.video}?showinfo=0`}
                                  allowFullScreen=""
                                  data-original-title="Watch videos"
                                ></iframe>
                                <div className="comments-avatar">
                                  <div className="commens-name">
                                    {item.name}
                                    <small className="text-muted"> {item.city} </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )
                      }
                      )}
                  </div>
                </div>

                {/* Text Testimonial */}
                <div className="testimonial_blk">
                  <div className="aboutBig">Testimonials</div>

                  {data.map((item, index) => {
                    return (
                      (item.video === '') ? (
                        <div className="single row img-handler" key={index}>
                          <div className="col-sm-11 cl_comments">
                            <div className="bubble">
                              <div className="text_comments">
                                <p>{item.text}</p>
                              </div>
                              <div className="comments-avatar">
                                <div className="commens-name">
                                  {item.name}
                                  <small className="text-muted"> {item.city}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-1 cl_video">
                            <div className="clt-img">
                              <img
                                src={item.img}
                                alt={item.name}
                              />
                            </div>
                          </div>
                        </div>) : ''
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
