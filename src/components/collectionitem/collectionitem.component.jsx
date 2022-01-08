import React from 'react';
import './collectionitem.styles.scss';
// import CustomButton from '../custom-button/custom-button.component';
import { CollectionItemContainer, CollectionImageStyle, CollectionFooterStyle } from './collectionitem.styles';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import { CustomButtonContainer } from '../custom-button/custom-button.styles';

const CollectionItem = ({item, addItem}) => {
    const {imageUrl, price, name } = item
    return(
        // <div className = 'collection-item'>
        //     <div className = 'image' style = {{backgroundImage : `url(${imageUrl})`}} />
        //     <div className = 'collection-footer'>
        //         <span name >{name}</span>
        //         <span price >{price}</span>
        //     </div>
        //     <CustomButton className = 'custom-button' onClick = {() => addItem(item)} inverted>ADD TO CART</CustomButton>
        <CollectionItemContainer>
        <CollectionImageStyle style = {{backgroundImage : `url(${imageUrl})`}} />
        <CollectionFooterStyle >
            <span name ={name} >{name}</span>
            <span price = {price} >{price}</span>
        </CollectionFooterStyle>
        <CustomButtonContainer  onClick = {() => addItem(item)} inverted >ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);