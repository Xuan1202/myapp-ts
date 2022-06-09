/** @format */

import React from 'react'

interface Greeting {
    name: string
}
const Hello: React.FC<Greeting> = (props: Greeting) => {
    return (
        <div>
            <h3>Hello组件</h3>



            <span>哈哈哈</span>
            <span>111111</span>
            <p>{props.name === 'tom' ? props.name + 'hanks' : props.name}</p>
        </div>
    )
}
export default Hello
