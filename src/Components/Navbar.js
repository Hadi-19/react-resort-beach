import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'


export class Navbar extends Component {
    state={
        isOpen:false
    }
    handletoggle=()=>{
        this.setState({isOpen:! this.state.isOpen});
    }
    
    render() {
    
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                        <img src={logo} alt="beach resort"/>
                        </Link>
                        <button type="button" onClick={this.handletoggle} className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav ":"nav-links"}>
                        <li>
                            <Link to="/rooms">rooms</Link>
                        </li>
                        <li> <Link to="/">home</Link> </li>

                    </ul>
                </div>
            </nav>
           
            
        )
    }
}

export default Navbar
