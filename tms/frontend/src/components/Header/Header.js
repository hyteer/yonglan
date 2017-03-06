import React, { Component } from 'react';
import {CallPrint,hasClass} from '../../Utils'

class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    console.log("this is sidebar...")
    CallPrint("hi,it'sfsft.");
    var obj = document.getElementsByTagName('body')[0]
    var xx = hasClass(obj,'sidebar-fixed')
    console.log("xx:"+xx)
    //Utils.changeBody();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
