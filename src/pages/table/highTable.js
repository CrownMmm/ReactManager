import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import axios from '../../axios/index'
import Utils from '../../util/utils';
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
            url: '/table/list1',
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

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
                width: 80
            },
            {
                title: '性别',
                width: 80,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }

            },
            {
                width: 80,
                title: '状态',
                key: 'state',
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
                key: 'interest',
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
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '婚否',
                key: 'isMarrised',
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
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '时间',
                key: 'time',
                width: 80,
                dataIndex: 'time'
            },
        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                width: 80,
                fixed:'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
                width: 80
            },
            {
                title: '性别',
                width: 80,
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }

            },
            {
                width: 80,
                title: '状态',
                key: 'state',
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
                key: 'interest',
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
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '婚否',
                key: 'isMarrised',
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
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '时间',
                key: 'time',
                width: 80,
                dataIndex: 'time',
                fixed:'right'
            },
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
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 1600 }}
                    />
                </Card>
            </div>
        );
    }
}

export default HighTable;
