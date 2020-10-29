import React, { Component } from 'react'
import {ThemeContext} from "../Context"
// console.log(ThemeContext,"ThemeContext")
// 引入 userPage
import UserPage from "./userPage"
export default class HomePage_2 extends Component {
    // static contextType = ThemeContext
    render() {
        let {themeColor} = this.context
        return (
            <div>
                <h3 className={themeColor}>HomePage_2</h3>
                <UserPage></UserPage>
            </div>
        )
    }
}
HomePage_2.contextType = ThemeContext
