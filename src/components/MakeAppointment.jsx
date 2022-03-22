import PropTypes from 'prop-types'
import Header from './Header'

const MakeAppointment = (props) => {
    return(
       <div className="makeAppoint">
           <h1>Schedule your appointment</h1>
       <form action="" method="post">
    <label htmlFor="fname">First Name:</label>
    <input type="text" id="fname" name="fname"/>
    <label htmlFor="lname">Last Name:</label>
    <input type="text" name="lname" id="lname" />
    <label htmlFor="appTime">Appointment Time:</label>
    <input type="datetime-local" />
    <input type="submit" />
    </form>
</div>
    )
}

export default MakeAppointment