import React from "react";
import { Link } from "react-router-dom";
import { getDataplans } from "../data";

export default function Home() {
  let dataplans = getDataplans();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {dataplans.map((dataplan) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/dataplan/${dataplan.id}`}
            key={dataplan.id}
          >
            {dataplan.size}
          </Link>
        ))}
      </nav>
    </div>
  );
}