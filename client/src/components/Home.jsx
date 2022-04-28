import PropTypes from 'prop-types'
import Header from './Header'

const Home = (props) => {
    return (
    <div className = 'home'>
        <h1 className='welcomeMessage'>Welcome to my Appointment Manager React application</h1>
        <p>(Note: This application is in active development. While the main functionality outlined on my resume are present, some features and styles that I plan to add have yet to be implemented.)</p>
    </div>
    )
}

export default Home