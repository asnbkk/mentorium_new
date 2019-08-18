import styled from 'styled-components'

import Logo from'../../assets/mentorium-logo.png'


export const MenuStyle = styled.div`
    width: 58px;
    height: 98%;
    background-color: #2250B3;
    padding-top: 50px;
    position: fixed;
    left: 0;
    top: 10px;
    overflow: hidden;
    z-index: 999999;
    transition: all 0.1s;
    box-shadow: 5px 0px 9px -9px rgba(0,0,0,0.75);
    border-top-right-radius: 52px;
    border-bottom-right-radius: 52px;

    :hover {
        width: 253px;
        transition: all 0.5s;
        box-shadow: 5px 0px 9px -8px rgba(0,0,0,0.75);
    }
    
`


export const MenuItemsStyle = styled.div` 
    margin-top: 15px;
`

export const MenuItemStyle = styled.div`
    padding: 15px 0 15px 58px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;

    > p:first-child {
        position: absolute;
        z-index: 20;
        left: 16px;
        color: #fcfafa;
    }

    
    > p:last-child {
        position: absolute;
        z-index: 20;
        left: 230px;
        color:  #2250B3;
    }

    :hover {
        > p:last-child {
            transition: all 0.3s;
            display: block;
            color: #fcfafa;
        }
    }


    :hover {
        background-color: #4A83FF;
        transition: all 0.3s;
    }
`

export const MenuProfileStyle = styled.div`
    padding-left: 5px;
    display: flex;
    flex-direction: row;
`

export const MenuLogoStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-top: 1px solid #2250B3;
    border-right: 1px solid #2250B3;
    border-top-right-radius: 52px;
    padding: 8px 0 3px 3px;
    > img {
        width: 45px;
        height: 45px;
        margin-right: 8px;
    }
`
