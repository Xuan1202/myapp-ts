/** @format */

import React from 'react'

interface Greeting {
    name: string
}
const Hello: React.FC<Greeting> = (props: Greeting) => {
    return (
        <div>
            <h3>Hello组件</h3>
            {/* <p>{props.name}</p> */}
        </div>
    )
}
export default Hello
