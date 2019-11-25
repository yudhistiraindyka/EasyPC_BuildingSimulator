import React from "react"
import logo from "./title.jpg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainContent from './MainContent'
import Tutorial from './Tutorial'
import AboutUs from './AboutUs'
import Manual from './Manual'
  

class Header extends React.Component {
    render() {   
        return (
            <Router>
                <div>
                    <header className="bar">
                        <img src={logo} alt="logo" width={"350px"} height={"150px"} />
                    </header>
                    <div>
                        <ul className="ulNavBar">
                            <li className="dropdown"><Link to={"/"}>Simulation
                                <ul>
                                    <div className="dropbtn">
                                    <div className="dropdown-content">
                                        <Link to={"/Manual"}><li className="icon">Manual</li></Link>
                                        <Link><li className="icon">Preset</li></Link>
                                    </div>
                                    </div>
                                </ul> 
                                </Link> 
                            </li>
                            <li><Link to={"/Tutorial"}>Tutorial</Link></li>
                            <li><Link to={"/AboutUs"}>About Us</Link></li>
                        </ul>

                        <hr />

                        <Switch>
                            <Route exact path="/">
                                <MainContent />
                            </Route>

                            <Route path="/Manual">
                                <Manual />
                            </Route>

                            <Route path="/Tutorial">
                                <Tutorial />
                            </Route>

                            <Route path="/AboutUs">
                                <AboutUs />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Header