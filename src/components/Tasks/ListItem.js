import { Link as StyledLink } from "rebass/styled-components"
import { Link } from "react-router-dom"


export const ListItem = ({id, title, description}) => {
  return (
    <li>
      <Link component={StyledLink} to={`/tasks/${id}`}>
        <span>{title}</span>  <span>{description}</span>
      </Link>
    </li>
  )
}
