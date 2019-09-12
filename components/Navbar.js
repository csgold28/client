import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.prevenDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-ite,">
                    <Link to="/login" className="nav-link">
                        Masuk
                    </Link>
                    <Link to="/register" className="nav-link">
                        Daftar
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-ite,">
                    <Link to="/profile" className="nav-link">
                        Member
                    </Link>
                </li>
                <li className="nav-item">
                    <a onClick={this.logOut.bind(this)} className="nav-link">
                        Keluar
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <botton className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>    
                </botton>
                <div 
                id="navbar1" className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)