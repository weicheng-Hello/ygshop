import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import "./Product.scss"
import tel from "../../image/tel.png"
import axios from "../../utils/axios"
class Product extends Component {
    
    state ={
        productDetail:{}
    }
    pid = null
    componentDidMount(){
        console.log(2)
        console.log(this.props)
        // 1.获取产品的id
        this.pid = this.props.match.params.productId || "";
        // 发送请求获取详细的产品数据
        axios.get("getProductDetail",{
            params:{
                pid:this.pid
            }
        }).then(res => {
            console.log(res.wdata)
            this.setState({
                productDetail:res.wdata
            })
        }).catch(err => console.log(err))
    }  
    render() {
        return (
            <div className='yg-product'>
                <div className="yg-product-header">
                <i className="icon icon-return"></i>
                <span className="yg-product-title">产品详情</span>
                <span>&nbsp;</span>
                </div>
                <div className="yg-product-content">
                    <div className="content-img">
                        <img src={this.state.productDetail.product_url} alt=""/>
                    </div>
                    <span className="content-name">{this.state.productDetail.product_name}</span>
                    <div className="content-price">
                        <span className="now-price">{this.state.productDetail.product_price}</span>
                        <span className="orgin-price">{this.state.productDetail.product_origin_price}</span>
                    </div>
                    <div className="product-content-spec">
                        <span>选择规格</span>
                        <i className="icon icon-select"></i>
                    </div>
                    <div className="product-content-tel">
                        <img src={tel} alt=""/>
                        <span className="content-tel-number">{this.state.productDetail.call}</span>
                    </div>
                </div>
                <div className="yg-product-tool">
                    <div className="product-tool-left">
                        <em>2</em>
                        <i className="icon icon-scar"></i>
                    </div>
                    <div className="product-tool-right">
                        <div className="tool-right-add" onClick={this.addToCart}>
                            加入购物车
                        </div>
                        <div className="tool-right-buy" onClick={this.pay}>
                            立即购买
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default  withRouter(Product)
