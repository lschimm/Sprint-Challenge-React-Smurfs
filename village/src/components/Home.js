import React from 'react'
import { NavLink } from 'react-router-dom';
import Smurfs from './Smurfs';

import '../App.css';


export default function Home() {
    return(
        <div>
            <h2><NavLink 
            to="/smurf-form"
            className="nav" >Add Smurfs </NavLink> {' '}
            <NavLink 
            to="/"
            className="nav"> See Smurfs </NavLink> </h2>
        </div>
    )
}