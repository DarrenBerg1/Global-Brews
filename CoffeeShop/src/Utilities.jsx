import axios from 'axios'

// Function for signing up a user
export async function signUp(name,email,password){
  let response = await axios.post('/signup/', {
    'name': name,
    'email': email,
    'password': password
  })
  // console.log('signUp',response.data.success) // Log the success response from the server
  window.location.reload() // Reload the page after the signup is complete
  return response.data.success // Return the success response from the server
}

// Function for logging in a user
export async function logIn(email, password, setUser){

  let response = await axios.post('/login/', {
    'email': email,
    'password': password
  })
  window.location.reload() // Reload the page after the login is complete
  console.log(response.data) // Log the response from the server
  // setUser('logIn',response.data) // Set the user in the application state (commented out)
  return response.data.login // Return the login response from the server
}

// Function for getting the current user
export async function currUser(){
  let response = await axios.get('/curruser/')
  // console.log('currUser',response.data) // Log the current user response from the server (commented out)
  return response.data // Return the current user response from the server
}

// Function for logging out a user
export async function logOut(setUser){
  let response = await axios.post('/logout/')
  if(response.data.logout){
    setUser(null) // Set the user to null in the application state if the logout is successful
  }
  window.location.reload()
}

export async function delete_user(setUser){
  let response = await axios.delete('/deluser/')
  if(response.data.delete){
  setUser(null)
}
}
