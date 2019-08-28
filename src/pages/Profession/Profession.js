import React, { Component } from 'react'

import './Profession.css'

import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Image from '../../components/Image/Image'

import CodingMan from '../../assets/coding-man.jpg'

export default class profession extends Component {

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
                    <Navbar animation={this.state.scrolled} white/>
                </div>
                <div className="profession">
                    <div className="profession_header">
                        <div className="profession_header__image">
                            <Image src={CodingMan} professionHeader withFilter/>
                        </div>
                        <div className="profession_header__title"></div>
                        <div className="profession_header__text"></div>
                    </div>
                    <div className="profession_navs"></div>
                    <div className="profession_pros-and-cons"></div>
                    <div className="profession_varieties"></div>
                    <div className="profession_offer"></div>
                    <div className="profession_suggestions"></div>
                    <div className="profession_growth"></div>
                    <div className="profession_payment"></div>
                    <div className="profession_relevance"></div>
                    <div className="profession_companies"></div>
                    <div className="profession_universities"></div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}