import React from "react";
import moment from "moment";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  DatePickerProps,
  Table,
  Space,
} from "antd";
import "./table.scss";
import { RestFilled } from "@ant-design/icons";
const TableAnt = () => {
  // form date
  const dateFormat = "dd/mm/yyyy/ hh:mm:ss";
  const dateFormat1 = "dd/mm/yyyy/ hh:mm:ss";
  const dateFormatList = ["DD/MM/YYYY hh:mm:ss ", "DD/MM/YY hh:mm:ss"];
  const customFormat: DatePickerProps["format"] = (value) =>
    ` ${value.format(dateFormat)}`;

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <div>
      <Form
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <div className="form-header">
          <h3>TẠO MỚI CHƯƠNG TRÌNH KHUYẾN MÃI</h3>
          <Button danger>Huỷ thao tác</Button>
        </div>
        <div className="form-body">
          <div className="form-body-left">
            <Form.Item
              name="Mã CTKM"
              label="Mã CTKM"
              rules={[
                {
                  required: true,
                  message: "Nhập mã Chương trình khuyến mãi",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Nhập" />
            </Form.Item>

            <Form.Item
              name="Tên CTKM"
              label="Tên CTKM"
              rules={[
                {
                  required: true,
                  message: "Nhập tên Chương trình khuyến mãi",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Nhập" />
            </Form.Item>

            <Form.Item
              name="Loại CTKM"
              label="Loại CTKM"
              rules={[
                {
                  required: true,
                  message: "Chọn loại chương trình khuyến mãi",
                },
              ]}
              hasFeedback
            >
              <Select placeholder="Chọn">
                <Select.Option value="option1">option 1</Select.Option>
                <Select.Option value="option2">option 2</Select.Option>
                <Select.Option value="option3">option 3</Select.Option>
                <Select.Option value="option4">option 4</Select.Option>
                <Select.Option value="option5">option 5</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Giao dịch áp dụng"
              label="Giao dịch áp dụng"
              rules={[{ required: true, message: "Chọn giao dịch áp dụng" }]}
              hasFeedback
            >
              <Select placeholder="Chọn">
                <Select.Option value="option1">option 1</Select.Option>
                <Select.Option value="option2">option 2</Select.Option>
                <Select.Option value="option3">option 3</Select.Option>
                <Select.Option value="option4">option 4</Select.Option>
                <Select.Option value="option5">option 5</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Đối tượng đại lý"
              label="Đối tượng đại lý"
              rules={[{ required: true, message: "Chọn đối tượng đại lý" }]}
              hasFeedback
            >
              <Select placeholder="Chọn">
                <Select.Option value="option1">option 1</Select.Option>
                <Select.Option value="option2">option 2</Select.Option>
                <Select.Option value="option3">option 3</Select.Option>
                <Select.Option value="option4">option 4</Select.Option>
                <Select.Option value="option5">option 5</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Hạng đại lý"
              label="Hạng đại lý"
              rules={[{ required: true, message: "Chọn hạng đại lý" }]}
              hasFeedback
            >
              <Select clearIcon="true" placeholder="Hạng đại lý">
                <Select.Option value="hang1">Hạng 1</Select.Option>
                <Select.Option value="hang2">Hạng 2</Select.Option>
                <Select.Option value="hang3">Hạng 3</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Điều kiện khuyến mãi"
              label="Điều kiện khuyến mãi"
              rules={[{ required: true, message: "Chọn điều kiện khuyến mãi" }]}
              hasFeedback
            >
              <Select placeholder="Chọn">
                <Select.Option value="option1">option 1</Select.Option>
                <Select.Option value="option2">option 2</Select.Option>
                <Select.Option value="option3">option 3</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Số đơn tối đa được giao dịch"
              label="Số đơn tối đa được giao dịch"
              rules={[
                {
                  required: true,
                  message: "Nhập số đơn tối da được giao dịch",
                },
              ]}
            >
              <Input addonAfter="giao dịch" />
            </Form.Item>

            <Form.Item
              name="Số tiền tối thiểu"
              label="Số tiền tối thiểu"
              rules={[
                {
                  required: true,
                  message: "Nhập số tiền tối thiểu",
                },
              ]}
            >
              <Input addonAfter="VND" />
            </Form.Item>

            <Form.Item
              name="% khuyến mãi"
              label="% khuyến mãi"
              rules={[
                {
                  required: true,
                  message: "Nhập phần trăm khuyến mãi",
                },
              ]}
              hasFeedback
            >
              <Input addonAfter="%" placeholder="Nhập phần trăm khuyến mãi" />
            </Form.Item>
          </div>

          <div className="form-body-right">
            <Form.Item label="Trạng thái">
              <Select placeholder="Status">
                <Select.Option value="active">Active</Select.Option>
                <Select.Option value="default">Default</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Ngày tạo">
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={moment("16/06/2022", dateFormatList[0])}
                format={dateFormatList}
              />
            </Form.Item>
            <Form.Item label="Ngày tạo">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="Người tạo" label="Người tạo">
              <Select placeholder="Position">
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="user">User</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Hiệu lực từ ngày"
              label="Hiệu lực từ ngày"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="Hiệu lực đến ngày(kế hoạch)"
              label="Hiệu lực đến ngày(kế hoạch)"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Hiệu lực từ ngày(thực tế)"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name="Ghi chú" label="Ghi chú:">
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <Form.Item className="form-button">
          <Button type="primary" htmlType="submit" style={{ width: "10%" }}>
            Gửi
          </Button>
        </Form.Item>
      </Form>
      <div className="form-footer">
        <div className="form-footer-title">
          <p>
            Chi tiết sản phẩm khuyến mãi (
            <span style={{ color: "red" }}>*</span>)
          </p>
        </div>
        <div className="form-footer-nav">
          <ul className="form-detail-title">
            <li style={{ width: "10%" }}>STT</li>
            <li style={{ width: "25%" }}>Mã sản phẩm</li>
            <li style={{ width: "25%" }}>Tên sản phẩm</li>
            <li style={{ width: "30%" }}>% Khuyễn mãi</li>
            <li style={{ width: "10%" }}>Thao tác</li>
          </ul>
        </div>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          // autoComplete="off"
          initialValues={{ salesPromotionItems: [""] }}
        >
          <Form.List name="salesPromotionItems">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <Space
                    className="space-items"
                    key={key}
                    style={{ display: "flex" }}
                  >
                    <Form.Item>
                      <p>{index + 1}.</p>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      rules={[{ required: true, message: "Nhập mã sản phẩm" }]}
                    >
                      <Input placeholder="Nhập" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
                    >
                      <Input placeholder="Nhập" />
                    </Form.Item>
                    <Form.Item>
                      <Input />
                    </Form.Item>
                    <div>
                      <PlusOutlined className="btn" onClick={() => add()} />
                      <MinusOutlined
                        className="btn"
                        onClick={() => remove(name)}
                      />
                    </div>
                  </Space>
                ))}
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </div>
  );
};

export default TableAnt;
