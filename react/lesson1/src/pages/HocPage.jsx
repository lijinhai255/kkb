import React, { Component } from 'react'






// 
const foo = (Cmp)=>props=>{
    return <div className="border">
        <Cmp {...props}></Cmp>
    </div>
}
function Child(props){
return <div className="border">{props.name}</div>

}

const Foo = foo(Child)

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Foo name={"lijinhai"}></Foo>
            </div>
        )
    }
}
