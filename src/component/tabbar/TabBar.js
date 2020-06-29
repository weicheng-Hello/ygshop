import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './TabBar.scss'
 class TabBar extends Component {
     state = {
         activeTab:'home'
     }
     componentDidMount(){
        let activeTab = window.location.hash.split('/')[1]
     }
     //Tab点击事件
     handleTabChange = (tab) =>{
         console.log(tab)
         let tabMap = {
             'home':{
                 path:'/'
             },
             'community':{
                path:'/community'
            },
            'cart':{
                path:'/cart'
            },
            'my':{
                path:'/my'
            },
         }
         this.props.history.push(tabMap[tab].path)
         this.setState({
             activeTab:tab
         })
     }
    render() {
        return (
            <div className='ygshop'>
                <div className='footer-content'>
                    {this.props.children}
                </div>
                <div className='ygshop-index-footer'>
                <div className='footer-list'  onClick={this.handleTabChange.bind(this,'home')}>
                    <i className={this.state.activeTab ==='home'?"icon icon-home-o":"icon icon-home"}></i>
                    <span className='footer-list-name'>首页</span>
                </div>
                <div className='footer-list'  onClick={this.handleTabChange.bind(this,'community')}>
                    <i className={this.state.activeTab ==='community'?"icon icon-community":"icon icon-community-o"}></i>
                    <span className='footer-list-name'>社区</span>
                </div>
                <div className='footer-list'  onClick={this.handleTabChange.bind(this,'cart')}>
                    <i className={this.state.activeTab ==='cart'?"icon icon-cart-o":"icon icon-cart"}></i>
                    <span className='footer-list-name'>购物车</span>
                </div>
                <div className='footer-list' onClick={this.handleTabChange.bind(this,'my')}>
                    <i className={this.state.activeTab ==='my'?"icon icon-my-o":"icon icon-my"}></i>
                    <span className='footer-list-name'>我的</span>
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(TabBar)
