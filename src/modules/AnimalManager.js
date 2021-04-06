const remoteURL = "http://localhost:8088"
// make sure your localhost matches the port you serve json on 

  export const getAnimalById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
    .then(result => result.json())
  }

  export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(result => result.json())
  }

  export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }