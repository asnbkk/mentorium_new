import React, { Component } from 'react'

import './Professions.css'

import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import AutoCompleteText from '../../components/AutoCompleteText/AutoCompleteText'

import Countries from '../../components/AutoCompleteText/Countries'

export default class professions extends Component {

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
                <div className="professions">
                    <div className="professions__header">
                        <div className="professions__header_content">
                            <div className="professions__header_content__title">Профессии</div>
                            <div className="professions__header_content__search">
                                <AutoCompleteText items={Countries}/>
                            </div>                        
                        </div>
                        <div className="professions__header_content__right">
                        <div className="professions__header_content__right_offer">
                                <Card>
                                    <div className="professions__header_content__right_offer_card">
                                        <div className="professions__header_content__right_offer_card__title">Уже определился с профессией?</div>
                                        <div className="professions__header_content__right_offer_card__list">
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <div className="professions__content">
                        <div className="professions__content_list">
                            <div className="professions__content_list__title">
                                Категории профессии
                            </div>
                            <Card list>                                
                                <div className="professions__content_list__card">
                                    <ul>
                                        <li><a href="*">Программист</a></li>
                                        <li><a href="*">Архитектор</a></li>
                                        <li><a href="*">Повар</a></li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                        <div className="professions__content_new">
                            <div className="professions__content_new__title">
                                Недавно обновлено
                            </div>
                            <Card list>
                                <div className="professions__content_new__card">
                                    <ul>
                                        <li><a href="*">link</a></li>
                                        <li><a href="*">link</a></li>
                                        <li><a href="*">link</a></li>
                                        <li><a href="*">link</a></li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}