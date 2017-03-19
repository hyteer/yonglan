import axios from 'axios'
import {axiosConfig,URL,debugConfig} from '../config/ytconfig'
import conf from '../config/conf'

export function ytdebug () {
  //url = config.dev.axiosConfig.baseURL
  console.log("Org Info:"+debugConfig.testInfo)
  console.log("Debug: set config")
  debugConfig.testInfo = "New Info..."
  console.log("Info:"+debugConfig.testInfo)
}

export function debugLog (msg) {
  console.log("Log:" + msg)
  var debugInfo = "hi this is debug info."
  return debugInfo
}

export function getResp() {
  return debugConfig.resp
}

export function init(){
  //Todo
} //初始化
export function ajax(){
  //Todo
} //通用ajax发起
export function MsgBox(){
  //Todo
} //错误提示
export function MakeToken(){
  //Todo
} //生成token

// var RESP = "resp..."

export var http = axios.create(conf.axiosConfig)

export function http_deprecated (url,type='get') {
  var ax = axios.create(axiosConfig)
  var resp = {}
  let self = this
  //var resp = new Object()
  //var resp = []
  switch (type) {
    case 'get':
      console.log('Get request...')
      ax.get(url)
      .then(function (response) {
        console.log(response);
        //console.log(response.data)
        resp = response.data
        console.log("RESP:")
        console.log(resp)
        self.respdata = resp
        self.resp = response.data
        console.log("RESPDATA:")
        console.log(self.respdata)
        //resp = Object.assign({}, response.data)

      })
      .catch(function (error) {
        console.log(error);
      })
      break;
    case 'post':
      console.log('Post requeest...')
    /*
    default:
      console.log('Default type...')
      ax.get(url)
      .then(function (response) {
        console.log(response);
        return response
      })
      .catch(function (error) {
        console.log(error);
      })
    */
  }
  return resp
}
