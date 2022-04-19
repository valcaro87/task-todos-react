import { Form } from "./Form";
import { Box, Flex } from "rebass/styled-components"

export const Create = ({onFormSubmit, isLoading}) => {

  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Box>
          <h1>Create New Task</h1>
          <Form defaultValues={null} onFormSubmit={onFormSubmit} isLoading={isLoading} btnText={"Create"}/>
        </Box>
      </Flex>
    </>
  )
};
