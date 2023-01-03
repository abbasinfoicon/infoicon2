import React from "react";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";

const PageNotFound = () => {
  return (
    <>
      <Banner title={404} banner={"assets/img/slider/inner-banner.jpg"}/>
      <Breadcrumb name={'404'} />
      <div className="pageNotFound text-center">
        <img src="assets/img/404.jpg" className="img-fluid" alt="404" />
      </div>
    </>
  );
};

export default PageNotFound;
