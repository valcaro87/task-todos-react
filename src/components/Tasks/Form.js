import { useEffect, useState } from "react"
import { Box, Button } from "rebass/styled-components"
import { Label, Input } from "@rebass/forms"
import { useForm } from "react-hook-form"
import { ThreeDots } from "react-loader-spinner"

export const Form = ({defaultValues, onFormSubmit, isLoading, btnText }) => {


  const { register, handleSubmit } = useForm({defaultValues})

  const onSubmit = handleSubmit((data => {
    onFormSubmit(data)
  }))


  return (
    <form onSubmit={onSubmit}>
      <Box>
        <Label>Title: </Label>
        <Input {...register('title', { required: true })} id="title" name="title" type="text" />
      </Box>
      <Box>
        <Label>Description: </Label>
        <Input {...register('description', { required: true })} id="description" name="description" type="text" />
      </Box>
      <Button>
        { isLoading ? <ThreeDots color="#ffffff" height={10} /> : `${btnText}` }
      </Button>
    </form>
  )
}
