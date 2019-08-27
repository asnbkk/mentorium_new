import styled from 'styled-components'

const CardStyle = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 10px;
    padding: 7px;
    width: 100%;

    ${props => props.steps &&
        `
        display: grid;
        grid-template-rows: auto 150px 1fr;
        box-shadow: none;
        `
    }

    ${props => props.list &&
        `
        padding: 7px 0;
        `
    }
`

export default CardStyle;
