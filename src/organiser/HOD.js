import React from "react";
import "./Organiser.css";
const Hod = () => {
  return (
    <div>
      <p className="Heading">HOD's</p>
      <div className="projectscontent">
        <div className="div1">
          <div>
            <img src={require(`../img/Untitled.png`)} alt="" />
          </div>
          <p className="Cardsheading">Person 1</p>
          <p className="Cardsp">Lorem ipsum dolor sit amet.</p>
          <div className="Cardsline"></div>
          <a href="youtube.com" className="me-4 text-white">
            <i className="fab fa-linkedin" />
          </a>
          <a href="youtube.com" className="me-4 text-white">
            <i className="fab fa-instagram" />
          </a>
        </div>

        <div className="div1">
          <div>
            <img src={require(`../img/Untitled.png`)} alt="" />
          </div>
          <p className="Cardsheading">Person 2</p>
          <p className="Cardsp">Lorem ipsum dolor sit amet.</p>
          <div className="Cardsline"></div>
          <a href="youtube.com" className="me-4 text-white">
            <i className="fab fa-linkedin" />
          </a>
          <a href="youtube.com" className="me-4 text-white">
            <i className="fab fa-instagram" />
          </a>
        </div>

        <div className="div1">
          <div>
            <img src={require(`../img/Untitled.png`)} alt="" />
          </div>
          <p className="Cardsheading">Person 3</p>
          <p className="Cardsp">Lorem ipsum dolor sit amet.</p>
          <div className="Cardsline"></div>
          <a href="youtube.com" className="me-4 text-white">
            <i className="fab fa-linkedin" />
          </a>
          <a href="youtube.com" className="me-4 text-white">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hod;
