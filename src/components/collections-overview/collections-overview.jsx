import React from 'react';
import {connect} from 'react-redux';

import {selectCollections} from '../../redux/shop/shop.selector'
import { createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss';

import CollectionPreview from '../preview-collection/collection.component'
const CollectionsOverview =({collections}) =>(
    <div className = 'collections-overview'>
        { collections.map(({id,...otherCollectionProps})=>(
                        <CollectionPreview key ={id}{...otherCollectionProps}/>
                    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)