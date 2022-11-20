import { ScheduleHead } from "./ScheduleHead"

export const Schedule = () => {
  return (
    <table class="table">
      <ScheduleHead/>

      <tbody class="table-group-divider">
        <tr>
          <th scope="row">7am a 8am</th>
          <td>Matematica I</td>
          <td>Programacion I</td>
          <td>Matematica I</td>
          <td>ProgramacionI</td>
        </tr>
        <tr>
          <th scope="row">8am a 9am</th>
          <td>Matematica I</td>
          <td>Programacion I</td>
          <td>Matematica I</td>
          <td>Programacion I</td>
          <td>Programacion I</td>
        </tr>
        <tr>
          <th scope="row">9am a 10am</th>
          <td>Base de Datos II</td>
          <td>Teoria</td>
          <td>Base de Datos II</td>
          <td>Teoria</td>
          <td>Base de Datos II</td>
        </tr>
        <tr>
          <th scope="row">10am a 11am</th>
          <td>Base de Datos II</td>
          <td>Teoria</td>
          <td>Base de Datos II</td>
          <td>Teoria</td>
        </tr>
        <tr>
          <th scope="row">11am a 12am</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>

        <tr>
          <th scope="row">12am a 1pm</th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>Larry the Bird</td>
        </tr>
      </tbody>
    </table>
  )
}
