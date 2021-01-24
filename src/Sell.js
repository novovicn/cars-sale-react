import React, { useState } from "react";
import Form from "./Form";
import "./Sell.css";

function Sell() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="sell">
      <Form submitForm={submitForm} />
    </div>
  );
}

export default Sell;
