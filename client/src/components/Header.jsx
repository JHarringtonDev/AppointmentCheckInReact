import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"
import logo from '../images/Journey-Full-Logo.png'

const Header = (props) => {
    return(
        <header className="Header">
            <NavLink className="journeyLogo" to="/">
            <img src={logo} alt="Journey Diagnostics Logo" className='companyLogo'/>
            </NavLink>
            <nav>
                <ul className="navItems">
                    <li><NavLink to="/Queue" className="inactive" activeClassName="active" exact={true}>Appointment Queue</NavLink></li>
                    <li><NavLink to="/Dashboard" className="inactive" activeClassName="active" exact={true}>Employee Dashboard</NavLink></li>
                    <li><NavLink to="/CheckIn" className="inactive" activeClassName="active" exact={true}>Check-in</NavLink></li>
                    <li><NavLink to="/MakeAppointment" className="inactive" activeClassName="active" exact={true}>Make Appointment</NavLink></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header