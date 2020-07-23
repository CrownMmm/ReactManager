import React, { Component } from 'react';
import { Card, Button, Tabs, message, Icon } from 'antd';
import './ui.less'


class Tab extends Component {

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            panes
        })
    }

    handleCallback = (key) => {
        message.info("当前页签" + key)
    }

    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab="Tab 1" key="1">欢迎学习React课程</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 3" key="3">React是一个非常受欢迎的MV*框架</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="定义图标Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <Tabs.TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习React课程</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2" >欢迎学习React课程</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">React是一个非常受欢迎的MV*框架</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title="可新增或删除Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        {
                            this.state.panes.map((panel) => {
                                return <Tabs.TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                >{panel.content}</Tabs.TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default Tab;