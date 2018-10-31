import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Layout.css';
import NavBar from './NavBar/NavBar';
import index from './Index/Index';
import curriculum from './Curriculum/Curriculum';

class Layout extends Component {
    render () {
        return (
            <div className="layout"> 
            <NavBar/>
            <Route path="/" exact component={index} />
            <Route path="/curriculum" exact component={curriculum} />
        </div>
        );
    } 
} 

export default Layout;