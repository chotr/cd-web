import React, { Component } from 'react'
import Header from '../Header'
import BestSeller from './BestSeller'
import Carousel from './Carousel'
import Services from './Services'
import TopNewPro from './TopNewPro'
import Type from './Type'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Services />
                <TopNewPro />
                <Type />
                <BestSeller />
            </div>
        )
    }
}
