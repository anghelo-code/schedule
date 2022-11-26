import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const OneCourses = ({ name, id, times, classDiv, handleRemoveTodo}) => {
    let textTimes = ``

    for ( let day in times ){
        textTimes += `${day}:  ${times[day][0]} a ${times[day][1]} `;
    }


    return (
        <div className="list-group-item list-group-item-action" aria-current="true" style={{backgroundColor: classDiv}}>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>{ id }</small>
            </div>
            
            <div className="d-flex w-100 justify-content-between" >
                <p className="mb-1">{textTimes}</p>
                <button 
                className=" w-25 btn btn-danger" 
                onClick={ () => handleRemoveTodo(id) }
            >
                Eliminar
            </button>
            </div>

        </div>
    )
}
