import styled from 'styled-components'

const InputStyle = styled.input`
    border: 1px solid #34383d;
    height: 37px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    padding: 0.3rem 1rem;
    margin: 0.3rem 0;
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    outline: none;
    transition: all 0.5s;

    
    :focus {
        border: 1px solid  #FFB42E;
        box-shadow: 0px 0px 20px -15px rgba(255,180,46,1);
    }

    ${props => props.small &&
        `
        border-radius: 25px;
        padding: 13px;
        font-size: 18px;
        `
    }

    ${props => props.blue &&
        `
        :focus {
            border: 1px solid  #224FB3;
        }
        `
    } 

`

export default InputStyle;
