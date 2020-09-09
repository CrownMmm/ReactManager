import React from 'react';
import { Card } from 'antd'
import axios from '../../axios'
import Utils from '../../util/utils'
import './detail.less'
export default class OrderDetail extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <div id="orderDetailMap">

                    </div>
                    <div className="detail-items">
                        <div className="item-title">
                            基础信息
                        </div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">
                            行车轨迹
                        </div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">行驶里程</div>
                                <div className="detail-form-content"></div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        )
    }
}