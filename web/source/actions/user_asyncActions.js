import { setUser } from './user_actions.js'

export const postUser = (email, password) => {
  const user = {
    email,
    password
  }
  return (dispatch) => {
    fetch(`${process.env.SERVER_ADDRESS}/user`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(user)
    }).then(response => response.json())
        .then(json => {/*Error message*/})
        // TODO error if user already exists
  }
}

// TODO Delete users

export const login = (email, password) => {
  const user = {
    email,
    password
  }

  return (dispatch) => {
    fetch(`${process.env.SERVER_ADDRESS}/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(user)
    }).then(response => response.json())
        .then(user => dispatch(setUser(Object.assign({}, user))))
        .catch(function() {
          dispatch(setUser({_id:false,email:false,connected:false, error:true}))
    });
  }
}
//
// export const fetchExpenses = () => {
//   return function(dispatch) {
//     return fetch(`${process.env.SERVER_ADDRESS}/expense`)
//             .then(response => {
//               const json = response.json()
//               return json
//             })
//             .then(json => dispatch(setExpenses(json)))
//   }
// }
