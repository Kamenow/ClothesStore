import React from 'react'

const Login = () => {
    return (
        <div className="wrapper">
            <div className="formContent">

                <div className="loginIcon">
                    <img src="../../img/avatar.png" className="icon" />
                </div>

                <form>
                    <input type="text" class="login" name="login" placeholder="email" />
                    <input type="text" class="password" name="password" placeholder="password" />
                    <input type="submit" value="Log In" />
                </form>

            </div>
        </div>

    )
}

export default Login