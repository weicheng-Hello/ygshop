import React, { Component } from 'react'
import axios from '../../utils/axios'
import { withRouter} from 'react-router-dom'
import './Register.scss'

class Register extends Component {
    state = {
        mobile:"",//用户名
        code:"",//验证码
        passWord:"",//密码
        code_msg:"发送验证码",
        count:60//60s倒计时
    }
    timeId = null;//定时器
    countIntervalId = null;//计数器
    //点击跳转登录页面
    handleLogin = (param) => {
        this.props.history.push('/Login')
    }
    //监听用户账号
    handleChangMobile = (e) => {
        this.setState({
            mobile:e.currentTarget.value
        })
        console.log(e.currentTarget.value)
    }
    //监听短信验证码
    handleChangCode = (e) => {
        this.setState({
            code:e.currentTarget.value
        })
        console.log(e.currentTarget.value)
    }
    //监听用户密码
    handleChangPwd = (e) => {
        this.setState({
            passWord:e.currentTarget.value
        })
        console.log(e.currentTarget.value)
    }
    
    //获取验证码
    handleCode = (param) => {
        console.log("点击了")
        let is_valid = this.checkPhone(this.state.mobile) ? true : false;
        if(is_valid){
            if(!this.timeId){
                axios.get('/getMobileCode?mobile='+this.state.mobile).then((res) => {
                    console.log(res)
                }).catch(err => console.log(err))
                this.timeId = setTimeout(()=>{
                    this.timeId = null
                    clearInterval(this.countIntervalId)
                    this.setState({
                        count:60
                    })
                },60*1000);
                setInterval(() => {
                 this.countIntervalId = this.setState({
                        count:this.state.count -1
                    })
                }, 1000);
            }
        }else{
            console.log("输入的号码有误，请重新输入！")
        }
    }
     // 正则检查号码的 合法性
     checkPhone = (mobile) => {
        // 座机
        // var tel = /^0\d{2,3}-?\d{7,8}$/;
        // 电话
        var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (mobile.length == 11) {//手机号码
            if (phone.test(mobile)) {
                // console.log(mobile);
                return true;
            }
        }
        // else if(mobile.length == 13 && mobile.indexOf("-") != -1 ){//电话号码
        //   if(tel.test(mobile)) {
        //     console.log(mobile);
        //     return true;
        //   }
        // }

        return false;
    }
    //注册账号
    handleRegister =(params) => {
        
        let username = this.state.mobile
        let password = this.state.passWord
        let code = this.state.code
        let mobile = this.state.mobile
        //地址拼接
        let url = "/createUser?mobile="+mobile+"&&username="+username+"&&code="+code+"&&password="+password
        if(!username || !password || !code){
            console.log("用户名或者验证码或者密码不能为空")
            return false;
        }
            axios.get(url).then((res) => {
                console.log(res)
                if(res.ret === 0){
                    this.props.history.push('Login')
                }
            }).catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className='user-register'>
                <h2 className='title'>云购商城</h2>
                <div className="register">
                    <div className='register-name'>
                        <input type="number" placeholder='请输入手机号码' 
                        onChange={this.handleChangMobile}
                        value={this.state.mobile}
                        />
                    </div>
                    <div className='register-msg'>
                        <input type="number"  onChange={this.handleChangCode} value={this.state.code}/>
                        <button className="msg" onClick={this.handleCode} onChange={this.handleChangCode}>{this.timeId ? this.state.count + "秒" : this.state.code_msg}</button>
                    </div>
                    <div className="register-pwd">
                        <input type="password" placeholder='密码' 
                        onChange={this.handleChangPwd}
                        value={this.state.passWord}
                        />
                    </div>
                    <div className="register-btn" onClick={this.handleRegister}>注册</div>
                    <div className="login-btn" onClick={this.handleLogin}>登录</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Register)
