import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import { Link } from "react-router-dom"
import { Form } from "./Form"
import { getTask, updateTask } from "../../api"
import { Box, Flex } from "rebass/styled-components"


export const Update = () => {
  const { id } = useParams()
  const history = useNavigate()
  const { data } = useQuery(["task", { id }], getTask)
  const [statez, setStatez] = useState(Date.now())

  const { mutateAsync } = useMutation(updateTask)
  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id })
    // setStatez(Date.now())
    // history('/tasks/')
  }


  useEffect(() => {
    setStatez(Date.now())
  }, [data])

  return (
    <>
      {data && (
        <>
          <Flex flexDirection="column" alignItems="center">
            <Box>
              <h1>Update Task</h1>

              <Form key={statez} defaultValues={data?.results} onFormSubmit={onFormSubmit} isLoading={false} btnText="Update" />
            </Box>
            <Link to={`/tasks/${data?.results.previous_id}`}>
              <span>Previous</span>
            </Link>
            <Link to={`/tasks/${data?.results.next_id}`}>
              <span>Next</span>
            </Link>
          </Flex>

        </>
      )}
    </>
  )

}
