import React from 'react'
import { Row, Col } from 'antd';

const myStyle = {
  background: '#5286b1'
}
var bgColor = {
  c1: {background:'#00CC00'},
  c2: {background:'#395c73'}
}

class GridDemo extends React.Component {
  render() {
    return (
    <div style={myStyle}>
      <p>sub-element align left</p>
      <Row type="flex" justify="start">
        <Col style={bgColor.c1} span={4}>col-4</Col>
        <Col style={bgColor.c2} span={4}>col-4</Col>
        <Col style={bgColor.c1} span={4}>col-4</Col>
        <Col style={bgColor.c2} span={4}>col-4</Col>
      </Row>
    </div>
    )
  }
}

export default GridDemo
