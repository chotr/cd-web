import React, { Component } from 'react'
import BackTop from '../../General/BackTop'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Achivement from './Achivement'
import BestSeller from './BestSeller'
import Carousel from './Carousel'
import EmailForSale from './EmailForSale'
import Services from './Services'
import TopNewPro from './TopNewPro'
import Type from './Type'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Carousel />
                <Services />
                <TopNewPro />
                <Type />
                <BestSeller />
                <Achivement />
                <EmailForSale/>
                <Footer />
                <BackTop />
               
            </div>
        )
    }
}
