import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function PlanTable() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: "Basic", price: "$9/mo", features: [100, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", 10, "-", "-", "-", "-", "-", 10, "-", "-"] },
    { name: "Pro", price: "$19/mo", features: [500, 2, <i className="fa fa-check"></i>, "-", "-", "-", "-", "-", "-", 150, "-", "-", 50, "-", "-", "-", 50, "-", 50, <i className="fa fa-check"></i>] },
    { name: "Business", price: "$15/mo", features: [1000, 5, 100, 50, <i className="fa fa-check"></i>, "-", "-", 200, "-", 200, "-", "-", 50, "-", "-", 100, "-", "-", 100, <i className="fa fa-check"></i>] },
    { name: "Enterprise", price: "$45/mo", features: ["Unlimited", 10, "Unlimited", 100, <i className="fa fa-check"></i>, <i className="fa fa-check"></i>, "-", "Unlimited", "-", "Unlimited", "-", 10, "Unlimited", "-", "-", "Unlimited", "-", "Unlimited", 500, <i className="fa fa-check"></i>] }
  ];

  const featureNames = [
    "Email Marketing Contacts", "Contact Lifecycle Stages", "Audits per day", "Crawl credits per month", "Live Tracking", "Deal Management", "Visual Sales Pipelines", "Multiple Sales Pipelines",
    "Sales Goals", "Product Customization", "Custom fields", "Custom links", "Custom modules", "Page layouts", "Validation Rules", "Email templates", "Website visitor tracking", "Mass email", "Marketing Attribution", "Auto-responders", "Customer segmentation"
  ];

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="container mt-5">
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            <th>Feature</th>
            {plans.map((plan, index) => (

              
              <th key={index}>
                <h4>{plan.name}</h4>

                <p>{plan.price}</p>
                <Button
                  variant={selectedPlan === plan.name ? "success" : "primary"}

                  onClick={() => handleSelectPlan(plan.name)}
                >
                  {selectedPlan === plan.name ? "Selected" : `Get ${plan.name}`}
                  
                </Button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureNames.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
              {plans.map((plan, i) => (
                <td key={i}>{plan.features[index]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanTable;
