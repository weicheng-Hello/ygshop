import React, { Component } from 'react'
import "./My.scss"
import MyBj from '../../image/user_bg.png'
import User from '../../image/user.jpg'
import Order from '../../image/order.png'
import U1 from '../../image/u1.png'
import U2 from '../../image/u2.png'
import U3 from '../../image/u3.png'
import U4 from '../../image/u4.png'
import { withRouter } from "react-router-dom"
class My extends Component {
    state= {
        isLogin:false//登录状态
    }
    handleClick = (params) => {
        this.props.history.push('/Login')
    }
    componentDidMount(){
        let useInfo =JSON.parse(localStorage.getItem('userInfo'))
        console.log(useInfo)
        if(useInfo.oauth_token){
            this.setState({
                isLogin:true
            })
        }
    }
    render() {
        return (
            <div className='yg-my'>
                <div className="yg-my-user">{
                    this.state.isLogin ?
                    <div className="my-user-bj">
                        <img src={MyBj} alt="" />
                        <div className="user">
                            <img src={User} alt="" />
                        </div>
                    </div>:
                    <div className="user-login">
                    <img src={MyBj} alt="" />
                    <div className="user-login-btn" onClick={this.handleClick}>登录</div>
                    </div>
                }
                </div>
                <div className='my-order'>
                        <div className="left">
                            <img src={Order} alt="" />
                            <span className='Order-name'>我的订单</span>
                        </div>
                        <div className="right">
                            <span className='right-left'>查看所有订单</span>
                            <i className="icon icon-select"></i>
                        </div>
                    </div>
                <div className="user-nav">
                    <div className="nav-item">
                        <i className="icon icon-f1"></i>
                        <span className="item-name">代付款</span>
                    </div>
                    <div className="nav-item">
                        <i className="icon icon-f2"></i>
                        <span className="item-name">待收货</span>
                    </div>
                    <div className="nav-item">
                        <i className="icon icon-f3"></i>
                        <span className="item-name">已收货</span>
                    </div>
                    <div className="nav-item">
                        <i className="icon icon-f4"></i>
                        <span className="item-name">已取消</span>
                    </div>
                    <div className="nav-item">
                        <i className="icon icon-f5"></i>
                        <span className="item-name">售后</span>
                    </div>
                </div>
                <div className="user-list-item">
                    <div className="user-list">
                        <div className="list-left">
                            <img src={U1} alt="" />
                            <span className="list-name">我的收藏</span>
                        </div>
                        <div className="right">
                            <span className="right-name">2</span>
                            <i className="icon icon-select"></i>
                        </div>
                    </div>
                    <div className="user-list">
                        <div className="list-left">
                            <img src={U2} alt="" />
                            <span className="list-name">联系客服</span>
                        </div>
                        <div className="right">
                            <span className="right-name"></span>
                            <i className="icon icon-select"></i>
                        </div>
                    </div>
                    <div className="user-list">
                        <div className="list-left">
                            <img src={U3} alt="" />
                            <span className="list-name">关于我们</span>
                        </div>
                        <div className="right">
                            <span className="right-name"></span>
                            <i className="icon icon-select"></i>
                        </div>
                    </div>
                    <div className="user-list">
                        <div className="list-left">
                            <img src={U4} alt="" />
                            <span className="list-name">设置</span>
                        </div>
                        <div className="right">
                            <span className="right-name"></span>
                            <i className="icon icon-select"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(My)
