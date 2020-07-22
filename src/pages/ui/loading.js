import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd';
import './ui.less'

class Loadings extends Component {
    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="spin用法" className="card-wrap">

                    <Spin size="small" />
                    <Spin style={{ margin: '0 10px' }} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{ marginLeft: 10 }} />
                </Card>
                <Card title="内容遮蔽" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎学习react"
                        type="info"
                    />
                    <Alert
                        message="React"
                        description="欢迎学习react"
                        type="warning"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习react"
                            type="success"
                        />
                    </Spin>
                    <Spin tip="加载中。。。">
                        <Alert
                            message="React"
                            description="欢迎学习react"
                            type="error"
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎学习react"
                            type="error"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loadings;