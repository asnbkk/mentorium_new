import React from 'react';

import './SignInGroup.css';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Link from '../Link/Link';

const signInGroup = props => (
    <div className="sign-in-group">
        <div className="sign-in-group__title">
            Добро пожаловать!
        </div>
        <div className="sign-in-group__subtitle">
            Еще не зарегистрированы? <a href="/sign-up">Создать аккаунт</a>
        </div>
        <div className="sign-in-group__inputs">
            <Input type='text' placeholder='E-mail'></Input>
            <Input type='password' placeholder='Пароль'></Input>
        </div>
        <div className="sign-in-group__pass">
            <a href="*">Забыли пароль?</a>
        </div>
        <div className="sign-in-group__button">
            <Button input>Войти</Button>
        </div>
    </div>
);

export default signInGroup; 