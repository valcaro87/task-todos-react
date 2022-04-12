import { useNavigate } from "react-router-dom"
import { useMutation } from "react-query"
import { Form } from "./Form";
import { Box, Flex } from "rebass/styled-components"
import { createTask } from "../../api"
import { Lists } from "./Lists"

export const Create = () => {
  const history = useNavigate()
  const { mutateAsync, isLoading } = useMutation(createTask)

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data })
    history(`/tasks`)
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Box>
          <h1>Create New Task</h1>
          <Form onFormSubmit={onFormSubmit} isLoading={isLoading} btnText={"Create"}/>
        </Box>
      </Flex>
    </>
  )
};
