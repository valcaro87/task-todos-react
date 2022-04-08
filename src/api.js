export const createNotes = async ({ ...data }) => {
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
