/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'
import monent from 'moment';

const TextArea = Input.TextArea;
const FormItem = Form.Item
const Option = Select.Option
class FormRegister extends Component {
    state={}

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 20
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const rowObject = {
            minRows: 4, maxRows: 6
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        //星号
                                        required: true,
                                        message: '用户名不能为空'
                                    }]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '',
                                })(
                                    <Radio.Group>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18',
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                })(
                                    <Select>
                                        <Option value="1">已毕业</Option>
                                        <Option value="2">找工作</Option>
                                        <Option value="3">结婚</Option>
                                        <Option value="4">住院</Option>
                                        <Option value="5">财富自由</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2', '5']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">爬山</Option>
                                        <Option value="6">骑行</Option>
                                        <Option value="7">桌球</Option>
                                        <Option value="8">麦霸</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否选中" {...formItemLayout}>
                            {
                                getFieldDecorator('isChecked', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: monent('2020-07-26')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '你好'
                                })(
                                    <TextArea
                                        autosize={rowObject}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        showUploadList={false}
                                        onChange={this.handleChange}

                                    >
                                        {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                   <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>

                    </Form>
                </Card>
            </div>
        );
    }
}

// export default FormRegister;
export default Form.create()(FormRegister);
