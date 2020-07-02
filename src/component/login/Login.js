import React, { Component } from 'react'
import axios from '../../utils/axios'
import { withRouter } from 'react-router-dom'
import './Login.scss'
class Login extends Component {
    state = {
        uesrname:"",
        password:"",
    }
    saveUserName = (e) => {
        this.setState({
            username:e.target.value
        })
    }
    savePsassword =(e) => {
        this.setState({
            password:e.target.value
        })
    }
    
    //跳转注册页面
    handleRegister = (prarms) => {
        this.props.history.push('/Register')
    }
    //登录账号
    handleLogin = () => {
        let username = this.state.username
        let password = this.state.password
        
        axios.get('/loginCheck',{
            params:{
                username,password
            }
        }).then((res) => {
            if(res.ret === 0){
                this.props.history.push('my')
                localStorage.setItem('userInfo',JSON.stringify(res.wdata))
            }
        }).catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className='user-login'>
                <h2 className='title'>云购商城</h2>
                <div className="login">
                    <div className='login-name'>
                        <input type="text" placeholder='用户名' onChange={this.saveUserName}/>
                    </div>
                    <div className="login-pwd">
                        <input type="password" placeholder='密码' onChange={this.savePsassword}/>
                    </div>
                    <div className="login-btn" onClick={this.handleLogin}>登录</div>
                    <div className="login-register" onClick={this.handleRegister}>注册</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)
