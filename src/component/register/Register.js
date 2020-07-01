import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import './Register.scss'
class Register extends Component {
    handleLogin = (param) => {
        this.props.history.push('/Login')
    }
    render() {
        return (
            <div className='user-register'>
                <h2 className='title'>云购商城</h2>
                <div className="register">
                    <div className='register-name'>
                        <input type="text" placeholder='用户名' />
                    </div>
                    <div className='register-msg'>
                        <input type="text" placeholder='请输入验证码'/>
                        <span className="msg">发送验证码</span>
                    </div>
                    <div className="register-pwd">
                        <input type="password" placeholder='密码' />
                    </div>
                    <div className="register-btn">注册</div>
                    <div className="login-btn" onClick={this.handleLogin}>登录</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Register)
