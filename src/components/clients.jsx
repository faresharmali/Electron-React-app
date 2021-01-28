import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faList ,faUserPlus ,faCheckDouble,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Clients = (props) => {
  let [nom, setName] = useState("");
  let [Prenom, setPname] = useState("");
  let [Num, setNum] = useState("");
  let [Adress, setAdr] = useState("");
  let addUser = () => {
      let inputs=document.querySelectorAll("input");
      let valid=true;
      inputs.forEach(input=>{
          
          if(input.value.trim()==''){
            input.classList.add("invalid")
            valid=false;
          }
      })
      if(valid){
        props.addC({nom,Prenom,Num,Adress})
        setName("");
        setPname("");
        setNum("");
        setAdr("");
        showSucces();
      }else{
        showError();
      }
   
   
  };
  let showSucces=()=>{
      document.querySelector('.succes').style.display="inline-block";
      setTimeout(() => {
        document.querySelector('.succes').style.display="none";
      }, 1500);

  }
  let showError=()=>{
      document.querySelector('.error').style.display="inline-block";
      setTimeout(() => {
        document.querySelector('.error').style.display="none";
      }, 1500);

  }
  let handleNewUser = (e) => {
    e.target.classList.remove("invalid")
    switch (e.target.name) {
      case "nom":
        setName(e.target.value);
      
        break;
      case "Prenom":
        setPname(e.target.value);
        break;
      case "Num":
        setNum(e.target.value);
        break;
      case "Adress":
        setAdr(e.target.value);
        break;
    }
  };
  return (
    <section className="clients">
      <div className="add_user_form">
        <h1><FontAwesomeIcon icon={faUserPlus} /> Ajouter Un Client</h1>
        <div className="form_container">
            <input onChange={handleNewUser} type="text" placeholder="Nom" name="nom" value={nom}/>
            <input onChange={handleNewUser} type="text" placeholder="Prenom" name="Prenom"  value={Prenom}/>
            <input onChange={handleNewUser} type="text" placeholder="Numero De Telephone"name="Num"  value={Num}/>
            <input onChange={handleNewUser} type="text" placeholder="Adresse"name="Adress"  value={Adress}/>
            </div>
            <div className="buttons_container flex_center">
                <div className="flex_center alert succes">
                    <h4><FontAwesomeIcon icon={faCheckDouble} /> Client Ajouté Avec Succes !</h4>
                </div>
                <div className="flex_center alert error">
                    <h4><FontAwesomeIcon icon={faTimesCircle} /> Verifier Vos Informations !</h4>
                </div>
            <div className="add_btn flex_center" onClick={addUser}>ajouter</div>
            </div>
      </div>

      <div className="clients_table">
        <h1><FontAwesomeIcon icon={faList} /> Liste Des Clients</h1>
       
        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Nom / Prenom</th>
                <th>N° de Telephone</th>
                <th>Adresse</th>
                <th>N Achats</th>
              </tr>
            </thead>
            <tbody>
                {props.clients.map(c=>(
                    <tr key={c.nom}>
                         <td data-th="CITY/TOWN/PLACES">{c.nom} {c.Prenom}</td>
                         <td data-th="VISITING STATUS">{c.Num}</td>
                         <td data-th="COUNTRY">{c.Adress}</td>
                         <td data-th="COUNTRY">{c.Adress}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Clients;
