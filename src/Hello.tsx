/** @format */

import React from 'react'

interface Greeting {
    name: string
}
const Hello: React.FC<Greeting> = (props: Greeting) => {
    return (
        <div>
            <span>哈哈哈</span>
            <h3>Hello组件</h3>
            <p>{props.name === 'tom' ? props.name + 'hanks' : props.name}</p>
        </div>
    )
}
export default Hello
