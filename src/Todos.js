import React, { Fragment } from 'react';

const Todos = (props) =>{
    const list = props.items.map(item => {
        return(
            <div className="list-item" key={item.key}>
                {item.text}
                <span className="delete" onClick={()=>props.deleteItem(item.key)}>
                    <i className="fa fa-trash"></i>
                </span>
            </div>
        )
    })
    return(
        <Fragment>
            {list}
        </Fragment>
    )
}
export default Todos;