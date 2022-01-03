import React from 'react';

import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';

import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collectionitem/collectionitem.component'
// const TopLevelCollectionPage = () => {
//     const id = useParams();
    
//     <CollectionPage id = {id}/>;
// };

// const CollectionPage = ({id, collection}) => {
//     console.log(id)
//     // console.log(props)
//     return (
//         <div className = 'category'>
//         COLLECTION PAGE
//         Welcome to {collection} page
//         <Outlet/>
//         </div>
//     )
// };

// const mapStateToProps = (state, ownProps) => ({
//     collection : selectCollection(state)
// });
// export default connect(mapStateToProps)(CollectionPage);

const CollectionPage = () => {
    const id = useParams();
    console.log(id.collectionId);
    const collection = useSelector(selectCollection(id.collectionId))
    console.log(collection);
    const {title, items} = collection;
    return(
        <div className = 'collection-page'>
            COLLECTION_PAGE
            <h2>{title}</h2>
            <div className = 'items'>
                {
                items.map((item)=> <CollectionItem key = {item.id} item = {item} /> )
                }
            </div>

        </div>
    )
}

export default CollectionPage;