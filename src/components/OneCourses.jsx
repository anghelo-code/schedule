import React from 'react'

export const OneCourses = ({name, id, nameT}) => {
    return (
        <div class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{name}</h5>
                <small>{id}</small>
            </div>
            <p class="mb-1">{nameT}</p>
        </div>
    )
}
