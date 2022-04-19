import { useMutation, useQueryClient } from "react-query"
import { Link as StyledLink, Button } from "rebass/styled-components"
import { Link } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { removeTask } from "../../api"

export const ListItem = ({id, title, description}) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeTask)

  const removeItem = async () => {
    await mutateAsync(id)
    queryClient.invalidateQueries('tasks')
  }


  return (
    <li>
      <Link component={StyledLink} to={`/tasks/${id}`}>
        <span>{title}</span>  <span>{description}</span>
      </Link>
      <Button variant='outline' onClick={removeItem} ml="5">
        { isLoading ? <ThreeDots color="#ffffff" height={5} /> : "x" }
      </Button>
    </li>
  )
}
