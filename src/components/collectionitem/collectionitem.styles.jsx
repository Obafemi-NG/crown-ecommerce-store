import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

const priceStyle = css`
  width: 10%;
`;
const nameStyle = css`
  width: 90%;
  margin-bottom: 15px;
`;
const getFooterDetailStyle = (props) => {
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

  &:hover {
    .image {
      opacity: 0.7;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: 0.6;
        /* display: flex; */
      }
    }
  }
`;

export const CollectionImageStyle = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
export const AddButton = styled(CustomButton)`
  width: 70%;
  opacity: 0;
  position: absolute;
  top: 255px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    min-width: unset;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CollectionFooterStyle = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 20px;
  ${getFooterDetailStyle}
`;
