import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Subjects from "./components/Subjects";



export default class App extends Component {

    render() {
        return(

        <BrowserRouter>
            <div>
                <AppNavbar/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/courses" component={Courses} exact/>
                    <Route path="/subjects" component={Subjects} exact/>
                </Switch>
            </div>
        </BrowserRouter>
        );
        }
}
