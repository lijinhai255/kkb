import React,{useContext} from 'react'
import {ThemeContext} from "../Context"
export default function UserPage(props) {
    const ctx = useContext(ThemeContext)
    const {themeColor} = ctx
    console.log(ctx,"ctx")
    return (
        <div>
            <h4 className={themeColor}>user userPage</h4>
        </div>
    )
}
