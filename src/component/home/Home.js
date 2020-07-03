import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Home.scss'
import axios from '../../utils/axios'
import Axios from "axios"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import Nav01 from "../../image/nav01.png"
import Nav02 from "../../image/nav02.png"
import Nav03 from "../../image/nav03.png"
import Nav04 from "../../image/nav04.png"
import Nav05 from "../../image/nav05.png"
import Scyh0 from "../../image/scyh0.jpg"
import Scyh1 from "../../image/scyh1.png"
import Scyh3 from "../../image/scyh3.png"
import Scyh4 from "../../image/scyh4.png"
 class Home extends Component {
    constructor(props){
        super(props);
        const CancelToken = Axios.CancelToken;
        this.source = CancelToken.source();
    }
    componentWillMount(){
        this.swiper = null
        this.source.cancel('Operation canceled by the user.')
    }
    state = {
        swiper_list: [],//轮播图列表
        product_list:[]//商品列表
    }
    componentDidMount() {
        
        axios.get('getHotProducts'
        ).then(res => {
            
            this.setState({
                product_list:res.wdata
            })

        }).catch(err => console.log(err))
        axios.get('getIndexLoopimg').then(res => {
            console.log(res)
            this.setState({
                swiper_list: res.wdata
            }, () => {
                new Swiper('.swiper-container', {
                    // direction:'vertical',//垂直切换选项
                    // effect:'fade',
                    loop: true,//循环模式选项
                    //如果需要分页器
                    pagination: {
                        el: ".swiper-pagination",
                        // type:'custom',//自定义分页器
                        clickable: true,//点击切换图片
                    },
                    autoplay: {
                        // delay:3000,//3秒切换一次
                        disableOnInteraction: false,//点击之后继续轮播

                    }
                })
            })
        }).catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className='ygshop-index'>
                {/* 首页顶部导航开始 */}
                <div className='ygshop-index-header'>
                    <i className="icon icon-menu"></i>
                    <span className='header-mindle'>云购商城</span>
                    <i className="icon icon-soso"></i>
                </div>
                {/* 首页顶部的导航结束 */}
                {/* 首页轮播图开始 */}
                <div className='yg-index-slider'>
                    <div className='swiper-container'>
                        <div className='swiper-wrapper'>
                            {
                                this.state.swiper_list.map(v => <div key={v.loopimg_url} className='swiper-slide'><img src={v.loopimg_url} alt="" /></div>)
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 首页轮播图结束 */}
                {/* 首页导航栏开始 */}
                <div className="yg-index-nav">
                    <div className="nav-box">
                        <div className="nav-item">
                            <img src={Nav01} alt="" />
                            <span>大聚惠</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav02} alt="" />
                            <span>海外购</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav03} alt="" />
                            <span>超市百货</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav04} alt="" />
                            <span>厂家直销</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav05} alt="" />
                            <span>美食娱乐</span>
                        </div>
                    </div>
                </div>
                {/* 首页当行栏结束 */}
                {/* 商城客户开始 */}
                <div className="yg-index-customer">
                    <h1>商城客户</h1>
                    <div className="customer-box">
                        <div className="customer-item">
                            <img src={Scyh0} alt="" />
                            <span>海绵包包</span>
                        </div>
                        <div className="customer-item">
                            <img src={Scyh1} alt="" />
                            <span>韩国代购</span>
                        </div>
                        <div className="customer-item">
                            <img src={Scyh3} alt="" />
                            <span>ARC潮店</span>
                        </div>
                        <div className="customer-item">
                            <img src={Scyh4} alt="" />
                            <span>欧力女装</span>
                        </div>
                    </div>
                </div>
                {/* 商城客户结束 */}
                {/* 首页精选促销开始 */}
                <div className="yg-index-jxcx">
                    <span className="title">精选促销</span>
                </div>
                <div className="yg-index-jxcx-product">
                    {this.state.product_list.map((v,key) => {
                        return (<div className='product-item' key={key} onClick={(patams) => {
                            //跳转到详情页面
                            this.props.history.push('/product/'+v.pid)
                            
                        }}>
                            <img src={v.product_url} alt=""/>
                            <h1>{v.product_name}</h1>
                            <span className='nowPrice'>￥{v.product_price}</span>
                            <span className='originPrice'>￥{v.product_origin_price}</span>
                        </div>)
                    })}
                </div>
                {/* 首页精选促销结束 */}
            </div>
        )
    }
}
export default withRouter(Home)
