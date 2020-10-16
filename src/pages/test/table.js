import React, { Component } from "react";
import "./index.css";
import { Card, Table, Modal, Button, message } from "antd";
import axios from "../../axios/index";
import Utils from "../../util/utils";

export default class TableTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: [],
      display: false,
    };
  }

  componentDidMount() {
    const data = [
      {
        id: "0",
        userName: "Jack",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00",
      },
      {
        id: "1",
        userName: "Tom",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00",
      },
      {
        id: "2",
        userName: "Lily",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00",
      },
    ];
    this.setState({
      tableList: data,
    });
  }

  handleClick = (record,index) => {
    let {tableList}=this.state
    // tableList.forEach(item => item["isEdit"]=false)
    // tableList[index].isEdit=true
    const key = "isEdit";
    tableList.forEach(item=> Reflect.set(item,key,false));
    Reflect.set(record, key, true);
    // console.log(record);
    this.setState({
      // display: true,
      tableList
    },console.log('ssss',this.state.tableList));
  };

  cancelRecord = (record) => {
    Reflect.set(record,"isEdit",false)
    this.setState({
      display: false,
    });
  } 
  render() {
    const { tableList } = this.state;
    const columns = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "用户名",
        dataIndex: "userName",
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex === 1 ? "男" : "女";
        },
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            1: "咸鱼一条",
            2: "风华浪子",
            3: "北大才子",
            4: "百度fe",
            5: "创业者",
          };
          return config[state];
        },
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(state) {
          let config = {
            1: "游泳",
            2: "打篮球",
            3: "踢足球",
            4: "跑步",
            5: "爬山",
            6: "唱歌",
            7: "骑车",
            8: "桌球",
          };
          return config[state];
        },
      },
      {
        title: "生日",
        dataIndex: "birthday",
      },
      {
        title: "地址",
        dataIndex: "address",
      },
      {
        title: "时间",
        dataIndex: "time",
      },
      {
        title: "操作",
        dataIndex: "edit",
        render: (text, record,index) => {
          let { display } = this.state;
          console.log(record);
          return (
            <div>
              {!record.isEdit ? (
                <span style={{ marginRight: 10 }} onClick={()=>this.handleClick(record,index)}>
                  选择
                </span>
              ) : 
              (
                <div>
                  <span onClick={()=>this.cancelRecord(record)}>取消</span>
                  <span onClick={()=>this.cancelRecord(record)}>保存</span>
                </div>
              )
              
              }

              <span >自行匹配</span>
            </div>
          );
        },
      },
    ];

    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            // dataSource={this.state.dataSource}
            dataSource={tableList}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
