import React, {Component} from 'react';

import './Home.css';

import Navbar from '../../components/Navbar/Navbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Image from '../../components/Image/Image'
import SignUpGroup from '../../components/SignUpGroup/SignUpGroup'
import Divider from '../../components/Divider/Divider'
import Footer from '../../components/Footer/Footer'

import BuildingImg from '../../assets/done-5.png'
import ClockImg from '../../assets/pale-waiting.png'
import GoalImg from '../../assets/success-3.png'
import SignUpImg from '../../assets/sign-up.png'
import Welcome from '../../assets/welcome.png'
import Proforientatior from '../../assets/marginalia-location-access.png'
import NavigationSupport from '../../assets/marginalia-navigation-support.png'
import Done from '../../assets/marginalia-done.png'
import Logo from '../../assets/mentorium-logo.png'
import LandingBackground from '../../assets/landing-background.png'
import WelcomePic from '../../assets/welcome.png'

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if (isTop !== true) {
                this.setState({ scrolled: true});
            }
            else {
                this.setState({ scrolled: false});
            }
        });
    }


    componentWillMount() {
        window.removeEventListener('scroll', function() { });
    }




    state = {
        sideDrawerOpen: false
    };

    drawToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render () {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div className="body" style={{height: '100%'}}>
                <Navbar drawerClickHandler={this.drawToggleClickHandler} animation={this.state.scrolled}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main className="landing-page">
                    <div className="landing-page__content">
                        
                        <p></p>
                        
                        <p></p>
                        <div className="landing-page__content_background">
                        </div>
                        
                        <div className="landing-page__content_text">
                            <div className="landing-page__content_text__title">
                                <Image src={Logo} height='120px'></Image>
                                <div className="landing-page__content_text__title_name">mentorium</div>
                            </div>
                            <div className="landing-page__content_text__title-text">интернет платформа, предназначенная для определения будущей специальности и поиска подходящих высших учебных заведений</div>
                            <div className="landing-page__content_text__buttons">
                                <Button landing>Начать</Button>
                                <Button landingSecond>Попробовать</Button>
                            </div>
                        </div>                
                    </div>
                </main>
                <div className="steps">
                    <div className="steps__content">
                        <div className="steps__content_title">Как это работает?</div>
                        <div className="steps__content_cards">
                            <Card steps>
                                <p className="steps__content_cards__title">Проконсультируйтесь</p>
                                <div className="steps__content_cards__picture">
                                    <p></p>
                                </div>
                                
                                <div className="steps__content_cards__content">Пройдите комплекс профориентационных тестов и проконсультируйтесь у профессионала</div>
                            </Card>
                            <Card steps>
                                <p className="steps__content_cards__title">Узнайте</p>
                                <div className="steps__content_cards__picture">
                                    <p></p>
                                </div>                                
                                <div className="steps__content_cards__content">Ознакомьтесь со всей актуальной информацией касательно вашей выбранной профессии</div>
                            </Card>
                            <Card steps>
                                <p className="steps__content_cards__title">Найдите</p>
                                <div className="steps__content_cards__picture">
                                    <p></p>
                                </div>
                                <div className="steps__content_cards__content">Узнайте все подробности о ВУЗе где обучают вашей выбранной специальности</div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="sign-in-section">
                    <div className="sign-in-section__picture">
                        <Image src={SignUpImg} height="500px"/>
                    </div>
                    <div className="sign-in-section__card">
                        <Card>
                            <SignUpGroup />
                        </Card>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="test-section">   
                        <Card>
                        <div className="test-section__card">
                            <div className="test-section__card_title">5 причин пройти профориентационный тест именно сейчас:</div>
                            <div className="test-section__card_content">
                                <div>1. Профориентация поможет определить свои реальные склонности и предпочтения</div>
                                <div>2. Профориентация отделит хобби от того, чем хочется заниматься каждый день профессионально</div>
                                <div>3. Профориентация поможет понять как зарабатывать занимаясь любимым делом</div>
                                <div>4. Пройдя профориентацию можно определить точную профессию</div>
                                <div>5. Профориентация поможет понять, где можно научиться выбранной профессии</div>                    
                            </div>
                            <div className="test-section__card_divider">
                                <Divider></Divider>
                                <p></p>
                            </div>
                            <div className="test-section__card_offer">
                                <div className="test-section__card_offer__left">
                                    Интересно? Тогда, предлагаем Вам пройти комплекс профориентационных тестов!
                                    <Button input>Пройти тест</Button>
                                </div>
                                <div className="test-section__card_offer__right"></div>
                            </div>
                            </div>
                        </Card>                    
                </div>
                <div className="spacer">
                    <p></p>
                    <Image src={WelcomePic} height='500px' welcome></Image>
                    </div>
                <div className="prof">
                    <Card>
                        <div className="prof__card">
                            <div className="prof__card_title">Живая профориентация лучше теста?</div>
                            <div className="prof__card_content">Определение жизненного пути при помощи профориентационного теста - достаточно точный инструмент для большинства. Но каждый человек уникален по своему и требует персонального подхода. По голосу и манере общения с человеком, можно определить его психотип, что поможет сделать более точное заключение.</div>
                            <div className="prof__card_divider">
                                <Divider></Divider>
                            </div>
                            <div className="prof__card_offer">
                                <div className="prof__card_offer__left">
                                    Интересно? Тогда, предлагаем Вам пройти комплекс профориентационных тестов!
                                    <Button input>Записаться</Button>
                                </div>
                                <div className="prof__card_offer__right"></div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="spacer"></div>
                <Footer />
            </div>
        );
    }
}