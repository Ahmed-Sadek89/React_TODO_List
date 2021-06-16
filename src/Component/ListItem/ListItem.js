import React from 'react';
const ListItem  = (props)=>{

    let { data , deleteItem } = props;
    let length = data.length;
    let AllItems = length ? (
        data.map(items =>{
            return(
                <div key = {items.id} className='AllItems'>
                    <span>{items.name}</span>
                    <span>{items.age}</span>
                    <span className='action' onClick = {() => deleteItem(items.id)}>X</span>
                </div>
            )
        })
    ) : 
    (
        <p>there is no item to show</p>
    )

    return(
        <div className = 'ListItem'>

            <div className = 'myHeader'>
                <span>name</span>
                <span>age</span>
                <span>action</span>
            </div>

            {AllItems}

        </div>
    )
}

export default ListItem;