import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Login.scss'
class Login extends Component {
    handleRegister = (prarms) => {
        this.props.history.push('/Register')
    }
    render() {
        return (
            <div className='user-login'>
                <h2 className='title'>云购商城</h2>
                <div className="login">
                    <div className='login-name'>
                        <input type="text" placeholder='用户名' />
                    </div>
                    <div className="login-pwd">
                        <input type="password" placeholder='密码' />
                    </div>
                    <div className="login-btn">登录</div>
                    <div className="login-register" onClick={this.handleRegister}>注册</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)
