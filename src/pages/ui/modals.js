import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd'
import './ui.less'
class Modals extends Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false

    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() => { 
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>弹窗组件1</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;
