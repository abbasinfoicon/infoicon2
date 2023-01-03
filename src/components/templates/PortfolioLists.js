import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";

const PortfolioLists = ({ data }) => {
  const [indus, setIndus] = useState([]);
  useEffect(() => {
    const industries = [];
    data.map((d) => {
      d.industries.map((ind) => {
        if (!industries.includes(ind.list)) {
          industries.push(ind.list);
        }
      });
    });
    setIndus([...industries]);
  }, [data]);

  return (
    <Accordion className="accordion left_accordion" id="faq">
      <AccordionItem className="card">
        <AccordionItemHeading>
          <AccordionItemButton className="card-header">
            <p>Services</p>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="card-body">
          <div className="rgtLinks botPad20">
            <ul>
              {[...new Set(data.map((item) => item.service))].map(
                (item, index) => {
                  return (
                    <li key={index}>
                      <Link to={`?type=service&category=${item}`}>
                        <span>{index}</span>
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="card">
        <AccordionItemHeading>
          <AccordionItemButton className="card-header">
            <p>Industries</p>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="card-body">
          <div className="rgtLinks botPad20">
            <ul>
              {indus.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`?type=industries&category=${item}`}>
                      <span>{index}</span>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="card">
        <AccordionItemHeading>
          <AccordionItemButton className="card-header">
            <p>Technologies</p>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="card-body">
          <div className="rgtLinks botPad20">
            <ul>
              {[...new Set(data.map((item) => item.technologies))].map(
                (item, index) => {
                  return (
                    <li key={index}>
                      <Link to={`?type=technologies&category=${item}`}>
                        <span>{index}</span>
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PortfolioLists;
