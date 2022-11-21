import React from 'react'

export const OneCourses = ({name, id, nameT, classDiv}) => {
    // const color = `background-color: ${classDiv};`;
    return (
        <div className="list-group-item list-group-item-action" aria-current="true" style={{backgroundColor: classDiv}}>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>{id}</small>
            </div>
            <p className="mb-1">{nameT}</p>
        </div>
    )
}
