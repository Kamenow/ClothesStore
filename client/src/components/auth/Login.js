import React from 'react'

const Login = () => {
    return (
        <div className="wrapper">
            <div className="formContent">

                <div className="loginIcon">
                    <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" className="profile" alt="profile" />
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

export default Login;