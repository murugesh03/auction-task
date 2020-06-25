import React from "react";
import "./Sidebar.scss";
import jessica from "../../../assets/Group9606.png";
import { Button } from "react-bootstrap";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li className="text-center pt-4">
          <img src={jessica} alt="jessica" />
          <p className="text-capitalize text-white py-2 text-center icon-text">
            jessica pearson
          </p>
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3 pr-2">
          Dashboard
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          ny posted jobs
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          my profile
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          my jobs
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          clients
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          messages
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          documents
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          invoices
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          job payment request
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          my earnings
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          my cards
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          payments & membership
        </li>
        <li className="text-left text-capitalize text-white pl-4 pt-3">
          review & referral
        </li>
        <li className="text-left  text-center py-5">
          <Button className="px-5 job-button text-uppercase">post a job</Button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
