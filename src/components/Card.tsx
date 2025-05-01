import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
