import { ScheduleHead } from "./ScheduleHead"

export const Schedule = () => {
  const colorMate="#EED9C4";
  const colorProgra="#FFEBCD";
  const colorBase="#D8BFD8";
  const colorTeoria="#FFFDD0";
  const colorQuechua="#CCCCFF";

  return (
    <table className="table h-100 table-bordered">
      <ScheduleHead/>

      <tbody className="table-group-divider">
        <tr>
          <th scope="row">7am a 8am</th>
          <td style={{backgroundColor: colorMate}} >Matematica I</td>
          <td style={{backgroundColor: colorProgra}} >Programacion I</td>
          <td style={{backgroundColor: colorMate}} >Matematica I</td>
          <td style={{backgroundColor: colorProgra}} >ProgramacionI</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">8am a 9am</th>
          <td style={{backgroundColor: colorMate}} >Matematica I</td>
          <td style={{backgroundColor: colorProgra}} >Programacion I</td>
          <td style={{backgroundColor: colorMate}} >Matematica I</td>
          <td style={{backgroundColor: colorProgra}} >Programacion I</td>
          <td style={{backgroundColor: colorProgra}} >Programacion I</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">9am a 10am</th>
          <td style={{backgroundColor: colorBase}} >Base de Datos II</td>
          <td style={{backgroundColor: colorTeoria}} >Teoria</td>
          <td style={{backgroundColor: colorBase}} >Base de Datos II</td>
          <td style={{backgroundColor: colorTeoria}} >Teoria</td>
          <td style={{backgroundColor: colorBase}} >Base de Datos II</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">10am a 11am</th>
          <td style={{backgroundColor: colorBase}} >Base de Datos II</td>
          <td style={{backgroundColor: colorTeoria}} >Teoria</td>
          <td style={{backgroundColor: colorBase}} >Base de Datos II</td>
          <td style={{backgroundColor: colorTeoria}} >Teoria</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">11am a 12am</th>
          <td>Larry the Bird</td>
          <td style={{backgroundColor: colorQuechua}} >Quechua</td>
          <td>Larry the Bird</td>
          <td style={{backgroundColor: colorQuechua}} >Quechua</td>
          <td>Larry the Bird</td>
          <td style={{backgroundColor: colorQuechua}} >Quechua</td>
        </tr>

        <tr>
          <th scope="row">12am a 1pm</th>
          <td>Larry the Bird</td>
          <td style={{backgroundColor: colorQuechua}} >Quechua</td>
          <td>Larry the Bird</td>
          <td style={{backgroundColor: colorQuechua}} >Quechua</td>
          <td>Larry the Bird</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
