import React,{Component} from 'react';
import {Navbar,NavItem,NavbarBrand,Nav} from "reactstrap";
import {NavLink} from 'react-router-dom';

class AppNavbar extends Component{

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <NavbarBrand href='/' >Sri Lanka Institute of Information Technology</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="border-white">
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="border-white">
                            <NavLink to="/courses">Courses</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="border-white">
                            <NavLink to="/subjects">Subjects</NavLink>
                        </NavItem>
                    </Nav>

                </Navbar>
            </div>
        );
    }
};

export  default AppNavbar;