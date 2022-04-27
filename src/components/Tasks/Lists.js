import { useEffect, useState } from "react"
import { useQuery, useMutation } from "react-query"
import { getAllTasks } from "../../api"
import { Flex } from "rebass/styled-components"
import { ThreeDots } from "react-loader-spinner"
import { ListItem } from "./ListItem"
import { Create } from "./Create"
import { createTask } from "../../api"

export const Lists = () => {
  const [allData, setAllData] = useState()
  const { data: getAllTasksData, error, isLoading, isError } = useQuery("tasks", getAllTasks)

  useEffect(() => {
    setAllData(getAllTasksData?.results)
  }, [getAllTasksData?.results])

  const { mutateAsync } = useMutation(createTask)
  const onFormSubmit = async (data) => {
    const response = await mutateAsync({ ...data })
    setAllData([...allData, response.results])
    // add multiple arrays
    // setAllData([...allData, response.results, {id: 999, title: 'fake', description: 'news'}])
  }

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

      {allData && (
        <>
          <h1>Tasks</h1>

          <ul>
            {allData.map((d) => (
              <ListItem key={d.id} {...d} isLoading={isLoading} />
            ))}
          </ul>
        </>
      )}

      <Create onFormSubmit={onFormSubmit} isLoading={isLoading} />

    </Flex>
  )
}
