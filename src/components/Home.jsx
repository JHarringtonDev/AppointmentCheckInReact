import PropTypes from 'prop-types'
import Header from './Header'

const Home = (props) => {
    return (
    <div className = 'home'>
        <h1 className='welcomeMessage'>Welcome to my Appointment Manager React application</h1>
        <p>(Note: This application is still in a work in progress with missing features and styles.)</p>
    </div>
    )
}

export default Home