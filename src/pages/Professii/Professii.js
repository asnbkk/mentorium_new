import React, { Component } from 'react'

import './Professii.css'

import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import AutoCompleteText from '../../components/AutoCompleteText/AutoCompleteText'

import Countries from '../../components/AutoCompleteText/Countries'

export default class Professii extends Component {

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
                <Navbar animation={this.state.scrolled} />
                <div className="professii">
                    <div className="professii__header">
                        <div className="professii__header_content">
                            <div className="professii__header_content__title">Профессии</div>
                            <div className="professii__header_content__search">
                                <AutoCompleteText items={Countries}/>
                            </div>
                            
                        </div>
                        <div className="professii__header_content__right">
                        <div className="professii__header_content__right_offer">
                                <Card>
                                    <div className="professii__header_content__right_offer_card">
                                        <div className="professii__header_content__right_offer_card__title">Уже определился с профессией?</div>
                                        <div className="professii__header_content__right_offer_card__list">
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="professii__content">
                        <div className="professii__content_list">
                            Категории профессий
                            <Card></Card>
                        </div>
                        <div className="professii__content_new">
                            Недавно обновленное
                            <Card></Card>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}