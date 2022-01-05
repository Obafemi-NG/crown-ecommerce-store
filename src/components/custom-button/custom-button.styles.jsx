import styled, {css} from 'styled-components';

const GoogleSignInStyles = css`
    background-color : #4285F4;
    color : white;
    border : none;
    &:hover {
    background-color: #357ae8;
    border: none;
    }
`

const CustomButtonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`

const InvertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    }
`

const getCustomStyles = props => {
    if (props.isGoogleSignIn) {
        return GoogleSignInStyles;
    }
    return props.inverted ? InvertedStyles : CustomButtonStyles
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;

    ${getCustomStyles}
`