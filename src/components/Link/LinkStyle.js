import styled from 'styled-components'

const LinkStyle = styled.p`


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
        color: #fff;
        display: inline;
        background-color: #224FB3;
        padding: 7px 13px 7px 13px;
        align-items: center;
        border-radius: 25px;
        min-width: 50px;
        max-width: 300px;

        :hover {
            border-bottom: none;
        }

        @media screen and (max-width: 795px) {
            text-align: left;
            margin-left: 20px;
            :hover {
                border-bottom: none;
            }
        }
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

    ${props => props.navbar &&
        `
        padding: 0 2rem;
        border: 1px solid #F58C28;
        color: #F58C28;
        border-radius: 10px;
        height: 40px;
        display: grid;
        align-items: center;
        list-style: none;
        margin: 0;
        transition: 0.3s all;        
        `
    }

    ${props => props.inverted &&
        `
        padding: 5px 11px 5px 11px;
        border: 2px solid #fff;

        @media screen and (max-width: 795px) {
            
            

            padding: 5px 11px 5px 11px;
            border: 2px solid #224FB3;
        }
        `
    }

    ${props => props.input &&
        `
        margin: 0;
        padding: 0;
        font-size: 14px;
        display: flex;
        align-items: start;
        text-decoration: underline;
        width: auto;
            :hover {
                color: #102a51;
            }
        `
    }


`

export default LinkStyle;
