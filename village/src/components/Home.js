import React from 'react'
import { NavLink } from 'react-router-dom';
import Smurfs from './Smurfs';


export default function Home() {
    return(
        <div>
            <h3><NavLink to="/smurf-form">Add Smurfs</NavLink> {' '}
            <NavLink to="/">See Smurfs</NavLink> </h3>
        </div>
    )
}