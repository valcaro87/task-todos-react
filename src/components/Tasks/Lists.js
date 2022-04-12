import { useEffect } from "react"
import { useQuery } from "react-query"
import { Link} from "react-router-dom"
import { getAllTasks } from "../../api"
import { Flex } from "rebass/styled-components"
import { ThreeDots } from "react-loader-spinner"
import { ListItem } from "./ListItem"

export const Lists = () => {
  const { data, error, isLoading, isError } = useQuery("tasks", getAllTasks)

  useEffect(() => {

  },[data])

  if (isLoading) {
    return (
      <Flex py={5} justifyContent="center">
        <ThreeDots color="#808080" height={10} />
      </Flex>
    );
  }

  if (isError) {
    return <span> {error.message} </span>;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <h1>Tasks</h1>

      <ul>
        {data.results.map((d) => (
          <ListItem key={d.id} {...d}/>
        ))}
        <li> <Link to="/tasks/new">+New</Link> </li>
      </ul>
    </Flex>
  )
}
