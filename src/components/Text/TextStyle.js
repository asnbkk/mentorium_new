import styled from 'styled-components'

const TextStyle = styled.p`
    color: #34383d;
    font-size: 18px;
    line-height: 27px;

    ${props => props.bold && 
        `
        font-weight: bold;
        `
    }

    ${props => props.big && 
        `
        font-size: 22px;
        line-height: 33px;
        `
    }

    ${props => props.small && 
        `
        font-size: 14px;
        line-height: 21px;
        `
    }

    ${props => props.large && 
        `
        font-size: 34px;
        line-height: 51px;
        `
    }

    ${props => props.primary && 
        `
        color: #224FB3;
        `
    }

    ${props => props.inverted && 
        `
        color:  #fcfafa;
        `
    }

    ${props => props.secondary && 
        `
        color: #898f96;
        `
    }

    ${props => props.nowrap && 
        `
        white-space: nowrap;
        `
    }

    ${props => props.uppercase && 
        `
            text-transform: uppercase;
        `
    }

    ${props => props.alignCenter && 
        `
            text-align: center;
        `
    }

    ${props => props.verticalAlign && 
        `
            align-content: center;
        `
    }

    ${props => props.verticalAlign && 
        `
            align-content: center;
        `
    }
`

export default TextStyle;
