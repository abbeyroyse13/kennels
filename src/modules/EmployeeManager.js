const remoteURL = "http://localhost:8088"

export const getEmployeeById = (id) => {
   return fetch(`${remoteURL}/employees/${id}`)
    .then(result => result.json())
  }

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(result => result.json())
  }

  export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addEmployee = (newEmployee) => {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }).then(response => response.json())
}