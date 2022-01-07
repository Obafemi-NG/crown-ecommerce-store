import styled, {css} from "styled-components";

const priceStyle = css`
    width: 10%;
`
const nameStyle = css`
    width: 90%;
    margin-bottom: 15px;
`
const getFooterDetailStyle = props => {
    if (props.name) {
        return nameStyle;
    } else if (props.price) {
        return priceStyle;
    }
};

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    padding: 0 5px;
`

export const CollectionImageStyle = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    &:hover {
    opacity: 0.8;
    }
`
// export const CollectionButtonStyle = styled.div`
//     width: 70%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//     &:hover {
//         opacity: 0.85;
//         display: flex;
//     }
//     ${CustomButtonContainer}
// `


export const CollectionFooterStyle = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    ${getFooterDetailStyle}
`