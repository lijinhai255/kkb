import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        const {themeColor} = this.props.theme
        return ( 
            <div>
                <h3 className={themeColor}>home Page</h3>
            </div>
        )
    }
}
