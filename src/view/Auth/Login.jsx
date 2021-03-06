import React from 'react'
import './login.css'
import { Button, Form, Input } from 'antd';

export default function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-body p-5 text-center">
                    <div className="text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo" style={{ width: '185px' }} />
                      <h4 className="mt-1 mb-5 pb-1">We are The Blue Team</h4>
                    </div>

                    <Form
                      name="basic"
                      // labelCol={{
                      //   span: 8,
                      // }}
                      // wrapperCol={{
                      //   span: 16,
                      // }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        // label="Username"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input placeholder='User name' className='w-75' />
                      </Form.Item>

                      <Form.Item
                        // label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input.Password placeholder='Password' className='w-75' />
                      </Form.Item>

                      {/* <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                          offset: 10,
                          span: 16,
                        }}
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item> */}

                      <Form.Item>
                        <div className="row text-center mt-3 mx-auto mb-4 justify-content-center">
                          <Button type='primary' htmlType="submit" className="loginLeft w-75" >Sign In</Button>
                        </div>
                      </Form.Item>
                    </Form>

                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
