import React from 'react';

import './SignUpGroup.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const signUpGroup = props => (

    <div className="sign-up-group">
        <div className="sign-up-group__title">
            Присоединяйтесь!
        </div>
        <div className="sign-up-group__subtitle">
            Уже есть аккаунт? <a href="/sign-in">Войти</a>
        </div>
        <div className="sign-up-group__inputs">
            <Input type='text' placeholder='E-mail'></Input>
            <Input type='password' placeholder='Пароль'></Input>
            <Input type='password' placeholder='Подтвердите пароль'></Input>
        </div>
        <div className="sign-up-group__checker">
            Запомнить меня
        </div>
        <div className="sign-up-group__button">
            <Button input>Зарегистрироваться</Button>
        </div>
    </div>
);

export default signUpGroup; 