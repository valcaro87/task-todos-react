export const createTask = async ({ ...data }) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/v1/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error(response.json().message)
  }

  return response.json()
}

export const getAllTasks = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/v1/tasks`)

  if (!response.ok) {
    throw new Error(response.json().message)
  }

  return response.json()
}

export const getTask = async ({queryKey}) => {
  // eslint-disable no-unused-vars
  const [_key, { id }] = queryKey
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/v1/tasks/${id}`)

  if (!response.ok) {
    throw new Error(response.json().message)
  }

  return response.json()
}

export const updateTask = async ({ id, ...data }) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/v1/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error(response.json().message)
  }

  return response.json()
}

export const removeTask = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/v1/tasks/${id}`, {
    method: "DELETE"
  })

  if (!response.ok) {
    throw new Error(response.json().message)
  }

  return true
}
