import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionItem from '../collectionitem/collectionitem.component';
import './collectionpreview.styles.scss';


const CollectionPreview = ({ title, items}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        // console.log('i was clicked');
        navigate(`/shop/${title.toLowerCase()}`)
    }
    return(
        <div className = 'collection-preview '>
            <div className = 'title' onClick = {handleClick}>
                {title.toUpperCase()}
            </div>
            {/* <h1 className = 'title'>
                {title.toUpperCase()}
            </h1> */}
            <div className = 'preview'>
                {items.filter((item, idx) => idx < 4)
                .map((item) => {
                    return (<CollectionItem key = {item.id} item= {item} />)
                })}
            </div>
        </div>
    )
}

export default CollectionPreview;