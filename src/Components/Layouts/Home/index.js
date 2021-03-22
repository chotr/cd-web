import React, { Component } from 'react'
import Header from '../Header'
import Carousel from './Carousel'
import Services from './Services'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Services />
            </div>
        )
    }
}
