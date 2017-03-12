import React from 'react'
import { Row, Col } from 'antd';

const myStyle = `background: #3f25bb;`

class GridDemo extends React.Component {
  render() {
    var textColor = "#CC0000";
    var bgColor = "#00CC00";
    return (
    <div style=myStyle>
      <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td style={{color: textColor}}>1textColor</td>
              <td style={{color: textColor,backgroundColor:'#00CC00'}}>MarkColorAndbgColor</td>
              <td style={{backgroundColor:bgColor}}>OttobgColor</td>
              <td><a href="http://www.baidu.com" style={{color: '#CC0000'}}>HrefColor</a></td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td style={{backgroundColor:'#00CC00'}} > <a href="http://www.baidu.com" style={{color: '#CC0000'}}>HrefColorAndbgColor</a> </td>
              <td>NameFull2</td>
            </tr>

            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird3Column</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </Table>
    </div>
    )
  }
}

export default GridDemo
