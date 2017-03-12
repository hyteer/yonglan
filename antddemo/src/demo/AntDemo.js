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

class AntDemo extends React.Component {

  render() {
    return(
      <div>
      <h3>AntDemo</h3>
      <DatePicker />
      <Cascader options={options} onChange={onChange} placeholder="请选择" />
    </div>
    )
  }
}

export default AntDemo

#
