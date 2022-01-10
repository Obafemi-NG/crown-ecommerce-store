import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
    padding: 10px 15px;
    pointer : cursor;
    @media screen and (max-width : 800px) {
    padding: 8px; 
  }  

`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width : 800px) {
    height : 50px;
    margin-bottom: 15px; 
  }  
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    padding: 5px;
    @media screen and (max-width : 800px) {
    width : 10px; 
    height: 10px;  

    }  
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width : 800px) {
    width : 80%; 
  }      
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles};
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles};
`