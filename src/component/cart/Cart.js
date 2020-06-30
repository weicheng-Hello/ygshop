import React, { Component } from 'react'
import "./Cart.scss"
import Shop from "../../image/shop.png"
import Shop1 from "../../image/shop1.png"
export default class Cart extends Component {
    render() {
        return (
            <div className='yg-cart'>
                <div className="yg-cart-header">
                    <i className="icon icon-return"></i>
                    <span className='cart-title'>购物车</span>
                    <span className='right'>编辑</span>
                </div>
                <div className="yg-cart-list">
                    <div className="list-search">
                        <input type="radio" name="" id="" />
                        <img src={Shop1} alt="" />
                        <span className='cart-name'>海绵包包</span>
                    </div>
                    <div className="cart-item">
                        <div className="left">
                            <img src={Shop} alt="" />
                        </div>
                        <div className="middle">
                            <span className='commodity-name'>首款海绵包包</span>
                            <span className='commodity-color'>颜色:黑色</span>
                            <span className='commodity-price'>￥68.00
                                <div className="commodity-num">
                                    <span className="icon norms-out"></span>
                                    <span className='num'>1</span>
                                    <span className="icon norms-add"></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
