import React, { Component } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Behest</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Button color="primary" onClick={this.props.navigateToIndex}>Home</Button>
              </NavItem>
              <NavItem>
                <Button color="info" onClick={this.props.renderAddNewUserForm}>Create New Form</Button>
              </NavItem>
              <NavItem>
                <Button color="secondary" onClick={this.props.logout}>Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  // render(){
  //   return (
  //       <div className="container">
  //         <div className="row">
  //
  //             <div className="four columns">
  //               <button className="button button-primary" onClick={this.props.navigateToIndex}>Home</button>
  //             </div>
  //
  //
  //             {/* <div className="three columns">
  //             <button className="button button" onClick={this.props.openLearnMorePage}>Learn More</button>
  //           </div> */}
  //
  //
  //           <div className="four columns">
  //                 <button className="button button" onClick={this.props.renderAddNewUserForm}>Create New Form</button>
  //           </div>
  //
  //
  //           <div className="four columns">
  //             <button className="button button" onClick={this.props.logout}>Logout</button>
  //           </div>
  //
  //         </div>
  //       </div>
  //   )
  // }

export default Navbar;
