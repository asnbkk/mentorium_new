import React, { Component } from 'react'

import './University.css'

import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import AutoCompleteText from '../../components/AutoCompleteText/AutoCompleteText'

import Countries from '../../components/AutoCompleteText/Countries'

export default class university extends Component {

    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop !== true) {
                this.setState({ scrolled: true });
            }
            else {
                this.setState({ scrolled: false });
            }
        });
    }


    componentWillMount() {
        window.removeEventListener('scroll', function () { });
    }

    render () {
        return (
            <div>
                <div className="navbar">
                    <Navbar animation={this.state.scrolled} />
                </div>
                
                <Footer></Footer>
            </div>
        );
    }
}