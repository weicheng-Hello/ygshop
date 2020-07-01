import React, { Component } from 'react'
import "./Community.scss"
import User from '../../image/user.jpg'
import User1 from '../../image/user1.png'
import User2 from '../../image/user2.png'
import User3 from '../../image/user3.png'
export default class Community extends Component {
    render() {
        return (
            <div className='yg-community'>
                <div className="community-header">
                    <i className="icon icon-return"></i>
                    <span className='community-title'>社区</span>
                    <i className="icon icon-addcommunity"></i>
                </div>
                <div className="community-comtent">
                    <div className="content-user">
                        <img src={User} alt=""/>
                        <span className='user-name'>我是郭小帅</span>
                        <p className='content-title'>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                    </div>
                    <div className="content-img">
                        <img src={User1} alt=""/>
                        <img src={User2} alt=""/>
                        <img src={User3} alt=""/>
                    </div>
                    <div className="content-foot">
                        <span className='left'>刚刚</span>
                        <i className="icon icon-share"></i>
                    </div>
                </div>
                <div className="community-comtent">
                    <div className="content-user">
                        <img src={User} alt=""/>
                        <span className='user-name'>我是郭小帅</span>
                        <p className='content-title'>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                    </div>
                    <div className="content-img">
                        <img src={User1} alt=""/>
                        <img src={User2} alt=""/>
                        <img src={User3} alt=""/>
                    </div>
                    <div className="content-foot">
                        <span className='left'>刚刚</span>
                        <i className="icon icon-share"></i>
                    </div>
                </div>
            </div>
        )
    }
}
