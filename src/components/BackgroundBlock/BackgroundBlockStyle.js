import styled from 'styled-components'

const BackgroundBlockStyle = styled.div`
    width: ${props => props.width};
    height: 2500px;
    background-color: #4A83FF;
    border-radius: 300px;
    transform: rotate(${props => props.rotate}deg);
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    position: absolute;
    z-index: -50;

    @media screen and (max-width: 795px) {
        top: -700px;
        left: 150px;
    }
    ${props => props.lightBlue &&
        `
        background-color: #6395FF;
        `
    }

    ${props => props.yellow &&
        `
        background-color: #FFCA4F;
        `
    }
`

export default BackgroundBlockStyle;
