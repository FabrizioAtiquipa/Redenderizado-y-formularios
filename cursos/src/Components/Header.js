import React from 'react';
//Half Stack application development
export default  function  Header(props) {
    const { title } = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

