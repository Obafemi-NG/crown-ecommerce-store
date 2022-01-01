import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';
import CollectionPreview from '../collectionspreview/collectionpreview.components';

const CollectionOverview = ({collections}) => {
    return(
        <div className = 'collections-overview'>
            {collections.map(({id, ...restOfCollectionsProps}) => (
                <CollectionPreview key = {id} {...restOfCollectionsProps} />
            )
            )}            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview);