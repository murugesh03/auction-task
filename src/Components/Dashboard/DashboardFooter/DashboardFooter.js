import React from "react";
import "./DashboardFooter.scss";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
const DashboardFooter = () => {
  return (
    <div className="dashboard-background dashboard-footer">
      <h2 className="text-center text-uppercase py-2"> logo</h2>
      <ul className="justify-content-center list-group dashboard-footer-list-one flex-row py-1">
        <li className="text-capitalize mx-2">top attoneys</li>
        <li className="text-capitalize mx-2">services</li>
        <li className="text-capitalize mx-2">pricing</li>
        <li className="text-capitalize mx-2">how it works</li>
        <li className="text-capitalize mx-2">attoneys apply</li>
        <li className="text-capitalize mx-2">articles</li>
      </ul>
      <ul className="list-group justify-content-center flex-row dashboard-footer-list-two py-3">
        <li className="text-capitalize mx-2">privacy policy</li>
        <li className="text-capitalize mx-2">terms & conditions</li>
      </ul>
      <ul className="list-group justify-content-center flex-row dashboard-footer-list-three py-3 dashboard-footer-list-icon">
        <li className="mx-2">
          <AiFillFacebook className="dashboard-footer-list-icons" />
        </li>
        <li className="mx-2">
          <FaTwitter className="dashboard-footer-list-icons" />
        </li>
        <li className="mx-2">
          <FaInstagram className="dashboard-footer-list-icons" />
        </li>
      </ul>
    </div>
  );
};

export default DashboardFooter;
