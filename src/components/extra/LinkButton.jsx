import { Link } from 'react-router-dom';

export const LinkButton = ({ path, text }) => {
  return (
    <Link className="btn btn-primary" to={ path } >{ text }</Link>
  )
}
