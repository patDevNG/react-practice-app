import React  from 'react';
import {Route} from 'react-router-dom'
import {createStructuredSelector} from 'reselect' 
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selector'

import CollectionOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collection/collection.component'
const ShopPage =({match})=>
   {
       console.log(match, "path router patrick")
     return(
            <div className = 'shop-page'>
                
                   
                <Route exact path ={`${match.path}`} component ={CollectionOverview}/>    
                <Route path = {`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )}
    


const mapStateTopProps = createStructuredSelector(
  {  collections:selectCollections}
)
export default connect(mapStateTopProps)(ShopPage)