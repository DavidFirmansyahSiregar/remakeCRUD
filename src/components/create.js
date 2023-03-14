import React, { useState } from "react";
import { Button, Form, Input,} from "antd";

export const Create = () => {
  const formRef = React.useRef(null);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [val, setVal] = useState("");
  // const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    // axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
    //         firstName,
    //         lastName,
    //         checkbox
    //     })
    console.log(fullName);
    console.log(userName);
    console.log(phoneNumber);
    // console.log(checkbox);
  };
  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value))
    {
      setPhoneNumber(e.target.value);
    }
  };
  const FormLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  return (
    <div>
      <Form 
        {...FormLayout}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Full Name" type='Name'>
          <Input
            type="name"
            placeholder="FullName"
            onChange={(e) => setFullName(e.target.value)}
            allowClear
          />
        </Form.Item>
        <Form.Item label="UserName">
          <Input
            type="name"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            placeholder="PhoneNumber"
            onChange={handleChange}
            size={'large'}
            type= 'number'
            allowClear
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button onClick={postData} type="primary">
            Submit
          </Button>
          <Button
            onClick={onReset}
            htmlType="button"
            style={{
              marginLeft: 10,
            }}
          >
            cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
