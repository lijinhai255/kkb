import React, {Component} from "react";
// 引入home Page
import HomePage from "./HomePage"
// 引入home2 Page
import HomePage2 from "./HomePage_2"
import { ThemeProvider } from "../Context"


export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: {
        name: "小明"
      }
    };
  }

 
  render() {
    const {theme, user} = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <HomePage theme={theme}></HomePage>
        <ThemeProvider value={theme}>
          <HomePage2></HomePage2>
        </ThemeProvider>

      </div>
    );
  }
}

// ! 如何使用context
// 1. 创建一个context对象： `React.createContext`
// 2. Provider提供者 接收一个value ，value就是我们要传递的参数
// 3. 子组件如何接收呢 ： 三种办法：（ContextType（只能用在类组件当中）、COnsumer、useContext（只能用在函数组件或者自定义hook中））
