import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../collection-items/collection-item.component'
const CollectionPreview =({title,items})=>{
    return (
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items.filter((item,idx)=> idx<4)
            .map(({id, ...otherItemProp})=>(
                // <div key={item.id}>{item.name}</div>
                <CollectionItem key={id}{...otherItemProp}/>
            ))
        }
        </div>
    </div>
    )
}

export default CollectionPreview;