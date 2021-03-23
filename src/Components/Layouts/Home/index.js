import React, { Component } from 'react'
import Header from '../Header'
import Carousel from './Carousel'
import Services from './Services'
import TopNewPro from './TopNewPro'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Services />
                <TopNewPro />
            </div>
        )
    }
}
