import React from 'react'

const Register = () => {
    return (
        <div class="wrapper">
            <div class="formContent">

                <div class="loginIcon">
                    <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" className="profile" alt="profile" />
                </div>

                <form>
                    <input type="text" class="login" name="login" placeholder="email" />
                    <input type="text" class="password" name="login" placeholder="password" />
                    <input type="text" class="email" name="login" placeholder="repeat password" />
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default Register;