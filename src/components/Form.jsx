export const Form = () => {
  return (
    <form className="row">
      <div className="col-md-5">
        <div className="form-group">
          <label htmlFor="Carrera">Carrera Profesional</label>

          <select class="form-select" aria-label="Default select example" name="Carrera">
            <option selected>Seleccione la carrera profesional</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="col-md-4">
        <div className="form-group">
          <label htmlFor="Curso">Cursos</label>

          <select class="form-select" aria-label="Default select example" name="Curso">
            <option selected>Seleccione el curso</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="col-md-3">
        <br />
        <button className="btn btn-primary" name="button-r">Agregar Curso</button>
      </div>
    </form>
  )
}