import React from 'react';

import './SignUp.css';

import Card from '../../components/Card/Card'
import SignUpGroup from '../../components/SignUpGroup/SignUpGroup'
import Image from '../../components/Image/Image'

import Logo from '../../assets/mentorium-logo.png'


const SignUp = props => (
    <div className="sign-up">

        <div className="sign-up__content">
            <div className="sign-up__content_logo">
                <a href="/"><Image src={Logo} height="60px"></Image></a>
            </div>
            <div className="sign-up__content_image"></div>
            <div className="sign-up__content_card">
                <Card>
                    <SignUpGroup></SignUpGroup>
                </Card>
            </div>
        </div>
    </div>
)

export default SignUp;