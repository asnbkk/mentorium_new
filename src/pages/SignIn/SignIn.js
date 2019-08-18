import React from 'react'

import './SignIn.css'

import Card from '../../components/Card/Card'
import SignInGroup from '../../components/SignInGroup/SignInGroup'
import Image from '../../components/Image/Image'

import Logo from '../../assets/mentorium-logo.png'

const SignIn = props => (
    <div className="sign-in">

        <div className="sign-in__content">
            <div className="sign-in__content_logo">
                <a href="/"><Image src={Logo} height="60px"></Image></a>
            </div>
            <div className="sign-in__content_image"></div>
            <div className="sign-in__content_card">
                <Card>
                    <SignInGroup></SignInGroup>
                </Card>
            </div>
        </div>
    </div>
)

export default SignIn;