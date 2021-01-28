import React, { Component } from "react";

const Dashboard = () => {
  return (
    <section className="dashboard">
         
      <div className="sidebar">
        <div className="sidebar_heading flex_center">
          <h1>Simplify Commerce</h1>
        </div>
        <div className="sideBar_item">Dashboard <i className="fas fa-chevron-right"></i></div>
        <div className="sideBar_item">Stock<i className="fas fa-chevron-right"></i></div>
        <div className="sideBar_item">Ventes<i className="fas fa-chevron-right"></i></div>
        <div className="sideBar_item">Achats<i className="fas fa-chevron-right"></i></div>
        <div className="sideBar_item">Factures<i className="fas fa-chevron-right"></i></div>
        <div className="sideBar_item">Clients<i className="fas fa-chevron-right"></i></div>
      </div>
      <div className="main"></div>
     
    </section>
  );
};

export default Dashboard;
