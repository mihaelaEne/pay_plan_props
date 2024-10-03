import React from "react";
import { Button } from "react-bootstrap";

function PlanHeader({ plans, selectedPlan, onSelect }) {
  return (
    <tr>
      <th>Feature</th>
      {plans.map((plan, index) => (
        <th key={index}>
          <h4>{plan.name}</h4>
          <p>{plan.price}</p>
          <Button
            variant={selectedPlan === plan.name ? "success" : "primary"}

            onClick={() => onSelect(plan.name)}
          >
            {selectedPlan === plan.name ? "Selected" : `Get ${plan.name}`}
            
          </Button>
        </th>
      ))}
    </tr>
  );
}


export default PlanHeader;
