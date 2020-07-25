import React, { Component } from 'react';
import { Card, Form, Input, Button, message } from 'antd'

const FromItem = Form.Item;
class FormLogin extends Component {
    handleSubmit = () => {
        let userInfo= this.props.form.getFieldValue();
        this.props.form.validateFields((err,values)=>{
            if(!err) {
                message.success(`${userInfo.userName} 恭喜通过表单校验，当前密码为${userInfo.userPwd}`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <FromItem>
                            <Input placeholder="请输入用户名" />
                        </FromItem>
                        <FromItem>
                            <Input placeholder="请输入密码" />
                        </FromItem>
                        <FromItem>
                            <Button type="primary">登录</Button>
                        </FromItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form layout="horizontal" style={{ width: 300 }}>
                        <FromItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    }]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '123456',
                                    rules: []
                                })(
                                    <Input placeholder="请输入密码" />)
                            }

                        </FromItem>
                        <FromItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FromItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);
