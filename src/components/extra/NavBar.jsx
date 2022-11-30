import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >ELMOrario</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ''}`} to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? `active` : ''}`} to="/horario" >Horario</NavLink>
            </li>

            <li className="nav-item">
              <a className='nav-link' href='https://docs.google.com/document/d/1svTYxN15i0yRRNeb1P_JBRcHFeOZz681b23O-4kUYQI/edit' target="_blank" >Ayuda</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
