import React from "react";

function PlanRow({ feature, features }) {
  return (
    <t className="plan-row">

      <td>{feature}</td>
      {features.map((value, index) => (
        
        <td key={index}>{value}</td>
      ))}
    </t>
  );
}

export default PlanRow;
