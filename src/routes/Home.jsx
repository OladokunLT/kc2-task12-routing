import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getDataplans } from "../data";
import "../home.css";

export default function Home() {
  let dataplans = getDataplans();
  return (
    <div >
      <nav
        className="plans"
      >
        {dataplans.map((dataplan) => (
          <Link
            to={`/kc2-task12-routing/dataplan/${dataplan.id}`}
            key={dataplan.id}
          >
            <div className="d-flex">
              <div className="card">
                <div className="size">{dataplan.size}</div>
                <div className="size">NGN {dataplan.value}</div>
                <div className="size">{dataplan.validity}</div>
              </div>
            </div>
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}