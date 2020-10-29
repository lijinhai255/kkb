import React, { Component } from 'react'
import { ThemeConsumer, ThemeContext} from "../Context"
export default class ConsumerPage extends Component {
    render() {
        return (
            <div>
                <h3> Consumer Page</h3>
                <ThemeConsumer>
                    {
                        ThemeContext=><div className={ThemeContext.themeColor}>12121</div>
                    }
                </ThemeConsumer>
            </div>
        )
    }
}
