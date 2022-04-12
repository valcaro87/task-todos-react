import { useParams, Routes, Route, useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import { Form } from "./Form"
import { getTask, updateTask } from "../../api"
import { Lists } from "./Lists"
import { Box, Flex } from "rebass/styled-components"

export const Update = () => {
  const { id } = useParams()
  const history = useNavigate()
  const { data, error, isLoading, isError } = useQuery(["task", { id }], getTask)

  const { mutateAsync, isLoading: isMutating } = useMutation(updateTask)
  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id })
    history('/tasks')
  }

  return (
    <>
      {!isLoading && (
        <Flex flexDirection="column" alignItems="center">
          <Box>
            <h1>Update Task</h1>
            <Form defaultValues={data.results} onFormSubmit={onFormSubmit} isLoading={false} btnText="Update" />
          </Box>
        </Flex>
      )}
    </>
  )

}
