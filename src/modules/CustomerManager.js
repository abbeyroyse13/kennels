const remoteURL = "http://localhost:8088"

export const getCustomerById = (id) => {
   return fetch(`${remoteURL}/customers/${id}`)
    .then(result => result.json())
  }

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(result => result.json())
  }