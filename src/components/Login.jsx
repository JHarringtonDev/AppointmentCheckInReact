import PropTypes from 'prop-types'
import Header from './Header'

const Login = (props) => {
    return(
       <div className="login">
           <h1>Employee Login</h1>
       <form action="" method="post">
    <label htmlFor="userN">Username:</label>
    <input type="text" id="userN" name="userN"/>
    <label htmlFor="password">Password:</label>
    <input type="text" name="password" id="password" />
    <input type="submit" />
    </form>
</div>
    )
}

export default Login