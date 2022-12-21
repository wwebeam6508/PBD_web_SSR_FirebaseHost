import React from 'react'
import cssStyle from '../../styles/admin/login.module.css'
export default function Login(props) {

    return (
        <div className={cssStyle.login_card} >
            <form className={cssStyle.form}>
                <input className={cssStyle.input_text} type="text" placeholder="Username" />
                <input className={cssStyle.input_password} type="password" placeholder="Password" />
                <input className={cssStyle.input_submit} type="submit" value="Log In" />
            </form>
        </div>
    )
}
