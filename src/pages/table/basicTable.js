import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import axios from 'axios'

class BasicTable extends Component {
    state = {
        dataSource2:[]
    }

    componentDidMount() {
        const data = [

            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },

        ]
        this.setState({
            dataSource: data
        })
        this.request()
    }

    //动态获取mock数据
    request = ()=>{
        let baseUrl ='https://www.easy-mock.com/mock/5f1db48674a4ec373ea6ac83/mockapi'
        axios.get(baseUrl+ '/table/list').then((res)=>{
            if (res.status == '200' && res.data.code === 0) {
                this.setState({
                    dataSource2:res.data.result

                })
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
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
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态渲染表格" style={{marginTop:10}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}

export default BasicTable;
