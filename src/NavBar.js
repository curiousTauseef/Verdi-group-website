import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="sticky-top">
        <Navbar color="faded" light expand="md" className="navbar pl-5 bg-success p-3 text-white minny text-nowrap">
          <NavbarBrand href="/">
          <img src={require('./images/logo.png')} className="img-responsive desktop-only" alt="" />
          <img src={require('./images/smallLogo.png')} className="img-responsive mobile-only smallLogo" alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mt-3 pull-right border-white"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
              <NavItem>
                <NavLink className="ml-auto text-white h4" href="/components/">ABOUT US</NavLink>
              </NavItem>
              <NavItem className="h2 desktop-only">&nbsp;&nbsp;|&nbsp;&nbsp;</NavItem> 
              <NavItem>
              <NavLink className="ml-auto text-white h4" href="/components/">TEAM</NavLink>
             </NavItem>
             <NavItem className="h2 desktop-only">&nbsp;&nbsp;|&nbsp;&nbsp;</NavItem> 
              <NavItem>
              <NavLink className="ml-auto text-white h4" href="/components/">SERVICES</NavLink>
             </NavItem>
             <NavItem className="h2 desktop-only">&nbsp;&nbsp;|&nbsp;&nbsp;</NavItem> 
              <NavItem>
              <NavLink className="ml-auto text-white h4" href="/components/">CLIENT WORK</NavLink>
         </NavItem>
         <NavItem className="h2 desktop-only">&nbsp;&nbsp;|&nbsp;&nbsp;</NavItem> 
            <NavItem>
            <NavLink className="ml-auto text-white h4" href="/components/">BLOG</NavLink>
         </NavItem>
         <NavItem className="h2 desktop-only">&nbsp;&nbsp;|&nbsp;&nbsp;</NavItem> 
         <NavItem>
         <NavLink className="ml-auto text-white h4 pr-5" href="https://www.linkedin.com/in/zachariahlowe">My LinkedIn</NavLink>
      </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}