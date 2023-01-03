import React from "react";
import { useGetAwardQuery } from "../../features/award/awardApi";

const Awards = () => {
  const { data, isError, isLoading } = useGetAwardQuery();
  // console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occured {isError.error}</div>;
  if (!data) {
    return <div>No posts !!!!</div>;
  }

  return (
    <div className="salesforceBox text-center">
      {data.map((item, index) => {
        return (
          <div className="awards-sec" key={index}>
            <a href={item.link} target="_blank" className={item.name}>
              <img src={item.img} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Awards;
