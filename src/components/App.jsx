import React, { Component } from 'react'
import NavBar from './NavBar'
import StockTicker from './StockTicker'
import VideoPlayer from './VideoPlayer'
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <NavBar/>
                <StockTicker/>
                <VideoPlayer/>
            </div>
        )
    }
}
