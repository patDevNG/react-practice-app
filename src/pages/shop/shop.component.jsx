import React, {Component}  from 'react';
import {Route} from 'react-router-dom'
import {createStructuredSelector} from 'reselect' 
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selector'

import CollectionOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collection/collection.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {updateCollections} from '../../redux/shop/shop.action'
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollection} = this.props
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot=>{
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    updateCollection(collectionsMap);
    })
  }
 render(){
   const {match} = this.props
  return(
    <div className = 'shop-page'>
        
           
        <Route exact path ={`${match.path}`} component ={CollectionOverview}/>    
        <Route path = {`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)}
 }

 
 
     
    


const mapStateTopProps = createStructuredSelector(
  {  collections:selectCollections}
)

const mapDispatchToProp =dispatch=>({
  updateCollection:collectionsMap=>dispatch(updateCollections(collectionsMap))
})
export default connect( mapStateTopProps,mapDispatchToProp)(ShopPage)