import PropTypes from 'prop-types'
import logo from '../images/Journey-Full-Logo.png'

const Header = (props) => {
    return(
        <header className="Header">
            <img src={logo} alt="Journey Diagnostics Logo" className='companyLogo'/>
            <nav>
                <ul className="navItems">
                    <li><a href="appointmentFeed.html">Appointment Feed </a></li>
                    <li><a href="employeeLogin">Employee Login</a></li>
                    <li><a href="check-in.html">Check-in</a></li>
                    <li><a href="makeAppointment.html">Make Appointment</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header