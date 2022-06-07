/** @format */

import React from 'react'
import Hello from './Hello'
import './App.css'
class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h3 className="app-h3">App组件</h3>
                <Hello name="tom" />
            </div>
        )
    }
}
export default App
