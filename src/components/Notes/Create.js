import { useNavigate } from "react-router-dom"
import { useMutation } from "react-query"
import { Form } from "./Form";
import { Box, Flex } from "rebass/styled-components"
import { createNotes } from "../../api";

export const Create = () => {
  const history = useNavigate()
  const { mutateAsync, isLoading } = useMutation(createNotes)

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data })
    history("/")
  }

  return (
    <Flex>
      <Box>
        <h1>Create New Book</h1>
        <Form onFormSubmit={onFormSubmit} isLoading={isLoading}/>
      </Box>
    </Flex>
  )
};
