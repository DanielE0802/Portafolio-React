import { Icon } from "@iconify/react";
import React from "react";

import { createPortal } from "react-dom";

function PortalMenú() {
  return createPortal(<Menú></Menú>, document.getElementById("html"));
}

function Menú() {
  return (
    <>
      <ul id="myMenu" className="left-menu">
        <li data-menuanchor="Home" className="active left-menu__item" id="Home">
          <div className="item__item-wrap">
            <a href="#Home">
              <Icon icon="uil:home-alt" />
            </a>
            <div className="tag">Home</div>
          </div>
        </li>
        <li data-menuanchor="Skills" id="Skills" className="left-menu__item">
          <div className="item__item-wrap">
            <a href="#Skills">
              <Icon icon="eva:book-outline" />
            </a>
            <div className="tag">Skills</div>
          </div>
        </li>
        <li
          data-menuanchor="Proyects"
          id="Proyects"
          className="left-menu__item"
        >
          <div className="item__item-wrap">
            <a href="#Proyects">
              <Icon icon="ic:outline-work-outline" />
            </a>
            <div className="tag">Skills</div>
          </div>
        </li>
        <li data-menuanchor="Contact" id="Contact" className="left-menu__item">
          <div className="item__item-wrap">
            <a href="#Contact">
              <Icon icon="bx:message-square-detail" />
            </a>
            <div className="tag">Skills</div>
          </div>
        </li>
      </ul>
    </>
  );
}

export { Menú, PortalMenú };
