import React, { Component } from 'react'
import { Card, Tree, Select, Icon, AutoComplete } from 'antd'
import './index.css'
const { TreeNode } = Tree;
const { Option } = Select;

export default class SelectTree extends Component {

    state = {
        list: [],
        options: [],
        value: undefined,
        searchList: [],
        expandList: [],
        value: '',
        dataSource: [],
        test:[ ]
    }
    treeNode = (data) => {
        return data.map(item => {
            // if (item.children) {
            //     console.log(item.children);

            //     return <TreeNode title={item.name} key={item.id}>
            //         {this.treeNode(item.children)}
            //     </TreeNode>
            // }
            // return <TreeNode title={item.name} key={item.id}>
            // </TreeNode>

            return item.children ?
                <TreeNode title={item.name} key={item.id}>
                    {this.treeNode(item.children)}
                </TreeNode> :

                <TreeNode title={item.name} key={item.id}>
                </TreeNode>
        }
        )
    }

    optionNode = (data) => {
        // console.log(this.state.value);
        if (this.state.value) {
            return data.map(item => <Option key={item.name} title={item.name}>{item.name}</Option>)
        }
        return null
    }
    componentDidMount() {
        const treeData = [
            {
                name: '黑龙江省',
                id: '1',
                children: [
                    {
                        name: '佳木斯市',
                        id: '10',
                        children: [
                            {
                                name: '前进区',
                                id: '111'
                            },
                            {
                                name: '东风区',
                                id: '112'
                            },
                            {
                                name: '向阳区',
                                id: '113'
                            }
                        ]
                    },
                    {
                        name: '哈尔滨市',
                        id: '11',
                        children: [
                            {
                                name: '南岗区',
                                id: '116'
                            }
                        ]
                    },
                    {
                        name: '齐齐哈尔市',
                        id: '12'
                    }
                ]
            },
            {
                name: '吉林省',
                id: '2',

            },
            {
                name: '辽宁省',
                id: '3',

            },
        ]
        const selectData = [
            {
                name: '前进区',
                id: '111',
                parentId: '10'
            },
            {
                name: '东风区',
                id: '112',
                parentId: '10'

            },
            {
                name: '向阳区',
                id: '113',
                parentId: '10'

            },
            {
                name: '新丰村',
                id: '114'
            },
            {
                name: '福利屯',
                id: '115'
            },
            {
                name: '南岗区',
                id: '116',
                parentId: '11'

            }
        ]
        this.setState({
            list: treeData,
            searchList: selectData

        })
    }

    handleChange = value => {
        //  let expandList =this.state.expandList.push(value)

        // let temp = []
        // this.state.searchList.find((e) => {
        //     if (e.name === value) {
        //          temp = e.parentId
        //         //  this.setState({
        //         //      expandList:e.parentId,
        //         //      value
        //         //  })
        //         let a =e.parentId
        //         console.log(a);
        //         temp=[...a]
        //         temp.push(e.parentId)
        //     }
        // })
        console.log(value);
        this.setState({
            // expandList: temp,
            test:["0-0", "0-0-1", "0-0-0"],
            expandList:["1", "10","11"],
            value
        }, () => console.log(this.state.test,this.state.expandList))
        // console.log(temp);    
    }
    onExpand = expandedKeys => {
        console.log(expandedKeys);
        // this.setState({
        //     expandList: expandedKeys,
        //     // autoExpandParent: false,
        // }, () => console.log(this.state.expandList));
    };

    onSelect = value => {
        console.log(value);
        // const ss =this.state.expandList.push(value)
        // console.log(ss);
        // this.state({
        //     expendList :value
        // })
    }
    onSearch = searchText => {
        this.setState({
          dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
        });
      };
    
      onChange = value => {
        this.setState({ value });
      };
    render() {
        return (
            <div>
                <Card>
                    <Select
                        // showSearch
                        showArrow={false}
                        mode="combobox"
                        // showSearch
                        // suffixIcon={<Icon type="step-forward" />}
                        onChange={this.handleChange}
                        className="select-list">

                        {
                            this.optionNode(this.state.searchList)
                        }
                    </Select>
                    {/* <AutoComplete
                        // dataSource={this.state.searchList}
                        style={{ width: 200 }}
                        onSelect={this.onSelect}
                        onSearch={this.onSearch}
                        placeholder="input here"
                    /> */}
                    <Tree
                        // defaultExpandAll
                        defaultExpandedKeys={this.state.expandList}
                        onExpand={this.onExpand}
                        onSelect={this.onSelect}
                        expandedKey={this.state.expandList}
                    // autoExpandParent
                    >
                        {
                            this.treeNode(this.state.list)
                        }
                        {/* {
                            this.state.list.map(item => {
                                return item.children ?
                                    <TreeNode title={item.name} key={item.id}>
                                        {this.treeNode(item.children)}
                                    </TreeNode> :

                                    <TreeNode title={item.name} key={item.id}>
                                    </TreeNode>
                            })
                        } */}
                    </Tree>
                </Card>
                <Card>
                    <Tree
                        // checkable
                        // defaultExpandAll
                        defaultExpandedKeys={this.state.test}
                        // defaultSelectedKeys={['0-0-0', '0-0-1']}
                        // defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onSelect={this.onSelect}
                        onCheck={this.onCheck}
                        onExpand={this.onExpand}
                        expandedKeys={this.state.test}
                    >
                        <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="parent 1-0" key="0-0-0" disabled>
                                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                                <TreeNode title="leaf" key="0-0-0-1" />
                            </TreeNode>
                            <TreeNode title="parent 1-1" key="0-0-1">
                                <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </Card>
            </div>
        )
    }
}
