import React from "react" 
import {Form,Select,DatePicker,Button,message} from "antd"

const FormItem = Form.Item 
const {Option} = Select 
class BikeForm extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                {
                        getFieldDecorator("city")(
                            <Select placeholder='北京' style={{width:100}}>
                                <Option value="1">北京市</Option>
                                <Option value="2">上海市</Option>
                                <Option value="3">广州市</Option>
                                <Option value="4">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="开始时间">
                     {
                        getFieldDecorator("start_time")(
                            <DatePicker />
                        )
                    }
                </FormItem>
                <FormItem label="~" colon={false}>
                     {
                        getFieldDecorator("ned_time")(
                            <DatePicker />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                {
                        getFieldDecorator("status")(
                            <Select  style={{width:100}} 
                            >
                                <Option value="0">进行中</Option>
                                <Option value="1">已结束</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{marginRight:20}}
                    onClick={()=>{
                        this.props.form.validateFields((err,fieldsValue)=>{
                            if(err){
                                message.error("发生错误")
                            }else{
                                this.props.queryBike(fieldsValue)
                            }
                        })
                    }}>查询</Button>
                    <Button type="primary" onClick={()=>{
                        this.props.form.resetFields()
                    }}>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
BikeForm = Form.create({})(BikeForm) 
export default BikeForm