import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../assets/logo.png'
import {
  faChevronRight,
  faUserFriends,
  faMoneyBillAlt,
  faShoppingBasket,
  faStore,
  faList,
  faChartPie,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Stock from "./stock.jsx";
import Achats from "./achats.jsx";
import Ventes from "./ventes.jsx";
import Clients from "./clients.jsx";
import Factures from "./factures.jsx";
import Statestiques from "./statestiques.jsx";
import Acceuil from "./acceuil.jsx";

const Dashboard = () => {
  let [page, setpage] = useState(5);
  let [clients,setClients]=useState([]);
  
  let addClients = (x) => {
    let clientList=clients;
    clientList.push(x);
    setClients(clientList);
  };

  let changePage = (x) => {
    let elements = document.querySelectorAll(".icon");
    let titles = document.querySelectorAll(".item_title");

    titles[x - 1].classList.toggle("ChangeColor");
    elements[x - 1].classList.toggle("rotate");
    let s = 0;
    elements.forEach((el) => {
      if (s != x - 1) {
        el.classList.remove("rotate");
      }
      s++;
    });
    setpage(x);
  };

  return (
    <section className="dashboard">
      <div className="sidebar">
        <div className="sidebar_heading flex_center">
          <img className="logo" src={Logo} alt=""/>
        </div>
        <div onClick= {()=>changePage(1)} className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faColumns} /> Acceuil </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
        <div onClick= {()=>changePage(2)}className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faStore} /> Stock </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
        <div onClick= {()=>changePage(3)} className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faShoppingBasket} /> Achats </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
        <div onClick= {()=>changePage(4)} className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faMoneyBillAlt} /> Ventes </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
        <div onClick= {()=>changePage(5)} className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faUserFriends} /> Clients </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
        <div onClick= {()=>changePage(6)} className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faList} /> Factures </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
        <div onClick= {()=>changePage(7)} className="sideBar_item"><span className="item_title"><FontAwesomeIcon icon={faChartPie} /> Statestiques </span>  <FontAwesomeIcon className="icon" icon={faChevronRight} /></div>
       
      </div>
      <div className="main">
        <nav></nav>
        {page == 1 && <Acceuil />}
        {page == 2 && <Stock />}
        {page == 3 && <Achats />}
        {page == 4 && <Ventes />}
        {page == 5 && <Clients addC={addClients} clients={clients} />}
        {page == 6 && <Factures />}
        {page == 7 && <Statestiques />}
      </div>
    </section>
  );
};

export default Dashboard;
