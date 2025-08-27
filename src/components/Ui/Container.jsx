import React from "react";

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1280px] px-6 ${className}`}>
    {children}
  </div>
);

export default Container;
