import React from 'react'
import {DatePicker, Cascader} from 'antd'

const options = [{
value: 'zhejiang',
label: 'Zhejiang',
children: [{
  value: 'hangzhou',
  label: 'Hangzhou',
  children: [{
    value: 'xihu',
    label: 'West Lake',
  }],
}],
}, {
value: 'jiangsu',
label: 'Jiangsu',
children: [{
  value: 'nanjing',
  label: 'Nanjing',
  children: [{
    value: 'zhonghuamen',
    label: 'Zhong Hua Men',
  }],
}],
}];

function onChange(value) {
  console.log(value);
}

class First extends React.Component {

  render() {
    return(
      <div>
      <h1>Hello, {this.props.name}</h1>
      <DatePicker />
      <Cascader options={options} onChange={onChange} placeholder="请选择" />
    </div>
    )
  }
}


export default First
