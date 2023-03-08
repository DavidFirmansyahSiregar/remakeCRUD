import React, { useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";

export const Create = () => {
  const formRef = React.useRef(null);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [val, setVal] = useState("");
  // const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    console.log(fullName);
    console.log(userName);
    console.log(phoneNumber);
    // console.log(checkbox);
  };
//   const handleChange = (e) => {
//     const regex = /^[0-9\b]+$/;
//     if (e.target.value === "" || regex.test(e.target.value))
//     {
//       setVal(e.target.value);
//       setPhoneNumber(e.targe.value);
//     }
//   };
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
            placeholder="FullName"
            onChange={(e) => setFullName(e.target.value)}
            allowClear
          />
        </Form.Item>
        <Form.Item label="UserName">
          <Input
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
            allowClear
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            placeholder="PhoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            // value={val}
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
