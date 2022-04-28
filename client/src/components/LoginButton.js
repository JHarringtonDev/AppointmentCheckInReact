import React from 'react'
import {Link } from "react-router-dom";

const LoginButton= () => {

    return(
        <div>
            <h2>You are not authorized to view this page.</h2>
            <Link to="/Login"><button>
              Go to Login
            </button>
            </Link>
            </div>
    )
}

export default LoginButton