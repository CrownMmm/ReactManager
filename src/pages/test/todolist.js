import React, { Component } from "react";
import { Card, Table, Modal, Button, message, Input } from "antd";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "这是默认数组",
      inputValue: "",
      checkedList: [],
    };
  }

  handlePress = (e) => {
    // console.log(e.target.value,'ajkak');
    const { checkedList } = this.state;
    this.setState(
      {
        checkedList: [...checkedList, e.target.value],
      },
      () => console.log(this.state.checkedList)
    );
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleDelete = (index) => {
    // console.log('1111' ,index);
    const { checkedList } = this.state;
    const newList = checkedList.filter((item, id) => id !==index);
    console.log(newList);
    this.setState({
      checkedList:newList
    })
  };
  render() {
    const divStyle = {
      margin: "15px 0 15px 20px",
      // border: '1px solid #ccc',
      width: "300px",
      height: "30px",
    };
    return (
      <div>
        <Card>
          <Input
            style={{ width: 300 }}
            placeholder={this.state.text}
            onPressEnter={this.handlePress}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          {this.state.checkedList.map((item, index) => {
            return (
              <div
                key={index}
                style={divStyle}
                onClick={() => this.handleDelete(index)}
                className="ss"
              >
                ·{item}
              </div>
            );
          })}
        </Card>
      </div>
    );
  }
}
