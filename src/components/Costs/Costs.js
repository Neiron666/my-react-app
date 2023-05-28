import React, { useState } from "react";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const yearChangeHandler = (Year) => {
    setSelectedYear(Year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });
  console.log(filteredCosts);

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
