import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


const InitHour = (Hour, object, arr) => {
  object[Hour] = [[], [], [], [], [], []];
  arr.push(Hour);
}
export const GetDays = () => {
  const { todos } = useContext(TodoContext);
  const days = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA'];
  const hours = [];
  const result = {};


  todos.map((item) => {
    const auxHoras = item.values.horas;
    for (const hour in auxHoras) {

      for (let i = auxHoras[hour][0]; i < auxHoras[hour][1]; i++) {
        if (hours.indexOf(i.toString()) == -1) InitHour(i.toString(), result, hours);

        const aux = {
          id: item.id,
          color: item.color
        }

        // console.log('valores: ');
        // console.log(auxHoras,hour,i);
        // console.log(days.indexOf(hour));
        // console.log(result);

        result[i.toString()][days.indexOf(hour)].push(aux);
      }
    }
  })

  console.log(result);
  return [result, hours];

}

  