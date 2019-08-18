import styled from 'styled-components'

const ButtonStyle = styled.div`
    
    height: 37px;
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    color: #fff;
    border-radius: 35px;
    font-size: 18px;
    justify-content: center;
    min-width: 50px;
    cursor: pointer;
    margin-right: 20px;
    

    ${props => props.primary &&
        `
        background-color: #FFB42E;
        color: white;
        `
    }

    ${props => props.secondary &&
        `
        background-color: #224FB3;
        color: white;

        will-change: transform, box-shadow;
        transition: all 0.5s;

        :hover {
        box-shadow: 0px 4px 10px -8px rgba(0,0,0,0.75);
        transform: translateY(-3px);
        transition: all 0.5s;
    }
        `
    }

    ${props => props.big &&
        `
        width: 100%;
        height: 50px;
        `
    }

    ${props => props.bar &&
        `
        margin-right: 0;
        background: transparent;
        color: #000;
        display: none;
        border-radius: 25px;
        @media screen and (max-width: 795px){
            
            padding: 0;
            text-align: center;
            align-items: center;
            display: flex;

            
        }
        `
    }

    ${props => props.landing &&
        `
        height: 40px;
        align-items: center;
        font-weight: 100;
        background: #F58C28;
        margin: 0;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        justify-content: center;
        width: auto;
        cursor: pointer;
        transition: 0.3s all;
        :hover,
        :active {
            opacity: 0.8;
            transition: 0.2s all;
        }
        `
    }

    ${props => props.landingSecond &&
        `
        height: 40px;
        align-items: center;
        font-weight: 100;
        background-color: #0B40D2;
        margin: 0;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        justify-content: center;
        width: auto;
        cursor: pointer;
        transition: 0.3s all;
        :hover,
        :active {
            opacity: 0.8;
            transition: 0.2s all;
        }
        `
    }

    ${props => props.input &&
        `
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 100;
        background: #F58C28;
        color: white;
        margin: 0;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        justify-content: center;
        width: auto;
        cursor: pointer;
        transition: 0.3s all;
        :hover,
        :active {
            opacity: 0.8;
            transition: 0.2s all;
        }
        `
    }
`

export default ButtonStyle;
