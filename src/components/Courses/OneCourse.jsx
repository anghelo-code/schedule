import { TodoContext } from '../../context';
import { useContext } from "react";

export const OneCourse = ({ name, id, aulas, classDiv, handleRemoveTodo}) => {
    const { colors, setColors } =  useContext( TodoContext );
    const onRemoveTodo = (id) => {
        setColors(c => ([ ...c , classDiv ]) );
        handleRemoveTodo(id);
        console.log('eliminar')
        console.log(colors)
    } 

    return (
        <div className="list-group-item list-group-item-action" aria-current="true" style={{backgroundColor: classDiv}}>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>{ id }</small>
            </div>
            
            <div className="d-flex w-100 justify-content-between" >
                <p className="mb-1">{ aulas }</p>
                <button 
                className=" w-25 btn btn-danger btn-eliminar text-center" 
                onClick={ () => onRemoveTodo(id) }
            >
                Eliminar
            </button>
            </div>

        </div>
    )
}
