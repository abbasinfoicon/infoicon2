import React from "react";
import { useParams } from "react-router";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import { useGetSignleBlogQuery } from "../features/blog/blogApi";

const BlogDetails = () => {
  const params = useParams();
  const { data, isError, isLoading } = useGetSignleBlogQuery(params.slug);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {data.error.error}</div>;

  return data.map((item) => {
    return (
      <>
        <Banner title={item.title} banner={item.banner ? item.banner : "assets/img/slider/inner-banner.jpg"} />

        <Breadcrumb name={item.title} parent={"blog"} />

        <div className="midCon">
          <div className="container clearfix">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card mb-4 blog-card">
                  <h2 className="card-title m-4">
                    {item.title} <span>{item.date}</span>
                  </h2>
                  <img className="card-img-top" src={item.img} />
                  <div className="card-body">
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default BlogDetails;
