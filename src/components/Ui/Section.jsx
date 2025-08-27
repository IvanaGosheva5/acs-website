import React from "react";
import Container from "./Container";

const Section = ({ className = "", innerClassName = "", children }) => (
  <section className={className}>
    <Container className={innerClassName}>{children}</Container>
  </section>
);

export default Section;
