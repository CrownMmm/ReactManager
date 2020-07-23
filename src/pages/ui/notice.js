import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';


class Notice extends Component {
    openNotification = (type,direction) => {
        if (direction) {
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message: '发工资了',
            description: '上个月考勤20天'
        })
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框 带弹出位置" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>左上</Button>
                    <Button type="primary" onClick={() => this.openNotification('info','topRight')}>右上</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning','bottomLeft')}>左下</Button>
                    <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>右下</Button>
                </Card>
            </div>
        );
    }
}

export default Notice;