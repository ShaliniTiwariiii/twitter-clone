import React from "react";
import "./Buttons.module.css";
function Buttons({ Sign, logo, className,image,btnNext}) {
  return (
    <>
      <button className={className} onClick={btnNext}>
       {image}{logo}&nbsp;{Sign}
      </button>
    </>
  );
}
export default Buttons;
