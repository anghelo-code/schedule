import { OneCourses } from "./OneCourses"

export const Courses = () => {
  return (
    <div className="list-group border p-4">
      <h2 className="text-center">Cursos</h2>
      <OneCourses name="Matematica I" nameT="Juan Florez" id="IF453" classDiv="#EED9C4" />
      <OneCourses name="Programacion I" nameT="Pedro Garzia" id="JD443" classDiv="#FFEBCD" />
      <OneCourses name="Base de Datos II" nameT="Judas Quispe" id="BI952" classDiv="#D8BFD8" />
      <OneCourses name="Teoria" nameT="Maria Quispe" id="IF353" classDiv="#FFFDD0" />
      <OneCourses name="Quechua" nameT="Pepe Peralta" id="AG353" classDiv="#CCCCFF" />
    </div>

  )
}
