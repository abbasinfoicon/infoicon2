import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import { useGetBlogQuery } from "../features/blog/blogApi";

const Blog = () => {
  const { data, isError, isLoading } = useGetBlogQuery();
  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {isError.error}</div>;
  if (!data) {
    return <div>No posts !!!!</div>;
  }

  return (
    <>
      <Banner title={"Blog"} banner={"assets/img/slider/inner-banner.jpg"} />

      <Breadcrumb name={"Blog"} />

      <div className="midCon">
        <div className="container clearfix">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-lg-6 col-md-6" key={index}>
                  <div className="card mb-4 blog-card">
                    <div className="blog-img">
                      <img className="card-img-top" src={item.img} />
                    </div>

                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p className="card-body">{item.desc}</p>
                    </div>

                    <div className="card-footer text-muted date-readmore d-flex justify-content-between">
                      <div className="date"> {item.date}</div>
                      <div className="link">
                        <Link to={`/blog/${item.slug}`}>
                          <span>
                            Read More <i className="fa fa-angle-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
