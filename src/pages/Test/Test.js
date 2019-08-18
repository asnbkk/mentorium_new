import React from 'react'

import './Test.css'

import Card from '../../components/Card/Card'
import Image from '../../components/Image/Image'

import Logo from '../../assets/mentorium-logo.png'

const Test = props => (
    <div className="test">
        <div className="test__logo">
                <a href="/"><Image src={Logo} height="60px"></Image></a>
        </div>
        <div className="test__content">
            <div className="test__content_title">Добро пожаловать!</div>
            <div className="test__content_text">
                Рекомендуем пройти комплекс профориентационных тестов, 
                которые диагностируют направленность, интересы и предложим наиболее подходящие профессии
            </div>
            <div className="test__content_card">
                <Card>
                    <div className="test__content_card__content">
                        <div className="test__content_card__content_1-test">
                            <div className="test__content_card__content_1-test__title">Сфера интересов</div>
                            <div className="test__content_card__content_1-test__text">Какие у Вас склонности и предпочния при выборе профессии?</div>
                            <div className="test__content_card__content_1-test__button">
                                <a href="*">Пройти тест</a>
                            </div>
                        </div>

                        <div className="test__content_card__content_2-test">
                            <div className="test__content_card__content_2-test__title">Мотивация</div>
                            <div className="test__content_card__content_2-test__text">Что для Вас является главной мотивацией для работы?</div>
                            <div className="test__content_card__content_2-test__button">
                                <a href="*">Пройти тест</a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="test__content_offer">
                <Card>
                    <div className="test__content_offer_card">
                        <div className="test__content_offer_card__title">Еще не проконсультировались?</div>
                        <div className="test__content_offer_card__button">
                            <a href="*">Записаться</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <div className="test_image"></div>
    </div>
)

export default Test;