import React, { Component } from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import axios from '../../axios/index'
class HighTable extends Component {
    state = {
    }

    params = {
        page: 1
    }
    componentDidMount() {

        this.request()
    }

    request = () => {
        let _this = this
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page,
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index
                })
                this.setState({
                    dataSource: res.result.list,
                })
            }
        })
    }

    handleChange = (pagination, filters, sorter) => {
        console.log("::" + sorter)
        this.setState({
            sortOrder: sorter.order

        })
    }

    // 删除操作
    handleDelete = (item) => {
        // let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }

            },
            {
                width: 80,
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度fe',
                        '5': '创业者',
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '唱歌',
                        '7': '骑车',
                        '8': '桌球',
                    }
                    return config[state]
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '婚否',
                width: 80,
                dataIndex: 'isMarrised',
                render(state) {
                    let config = {
                        '1': '已婚',
                        "0": '未婚'
                    }
                    return config[state]
                }
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '时间',
                width: 80,
                dataIndex: 'time'
            },
        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: 'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }

            },
            {
                width: 80,
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度fe',
                        '5': '创业者',
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '唱歌',
                        '7': '骑车',
                        '8': '桌球',
                    }
                    return config[state]
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '婚否',
                width: 80,
                dataIndex: 'isMarrised',
                render(state) {
                    let config = {
                        '1': '已婚',
                        "0": '未婚'
                    }
                    return config[state]
                }
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '时间',
                width: 80,
                dataIndex: 'time',
                fixed: 'right'
            },
        ]
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }

            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度fe',
                        '5': '创业者',
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '唱歌',
                        '7': '骑车',
                        '8': '桌球',
                    }
                    return config[state]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '婚否',
                dataIndex: 'isMarrised',
                render(state) {
                    let config = {
                        '1': '已婚',
                        "0": '未婚'
                    }
                    return config[state]
                }
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '时间',
                dataIndex: 'time'
            },
        ]
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }

            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度fe',
                        '5': '创业者',
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': <Badge status="success" text="游泳" />,
                        '2': <Badge status="error" text="打篮球" />,
                        '3': <Badge status="default" text="踢足球" />,
                        '4': <Badge status="processing" text="跑步" />,
                        '5': <Badge status="warning" text="爬山" />,
                        '6': <Badge status="default" text="唱歌" />,
                        '7': <Badge status="processing" text="骑车" />,
                        '8': <Badge status="warning" text="桌球" />
                    }
                    return config[state]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '婚否',
                dataIndex: 'isMarrised',
                render(state) {
                    let config = {
                        '1': '已婚',
                        "0": '未婚'
                    }
                    return config[state]
                }
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                }
            }
        ]

        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 1600 }}
                    />
                </Card>
                <Card title="排序" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}

export default HighTable;
