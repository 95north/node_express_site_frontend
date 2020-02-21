const CreateUser = document.querySelector('.CreateUser');
const Login = document.querySelector('.Login');
const URL = "http://localhost:7555"

CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  post('/createUser', { username, password })
})


Login.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = Login.querySelector('.username').value
  const password = Login.querySelector('.password').value
  post('/login', { username, password })

  .then(( resp ) => {
    console.log("Frontend Resp is: ", resp);
    if (resp.status === 200){ 
        alert('Frontend says: login success')
    } else {
        alert('Frontend says: login failed')
    }
    return resp.json();
  })
    // .then(({ status }) => {
    //   console.log("Frontend Status is: ", status);

    //     if (status === 200){ 
    //         alert('Frontend says: login success')
    //     } else {
    //         alert('Frontend says: login failed')
    //     }
    // })
    .then( res => {
        console.log("Then #2 res: ", res)
    })
})


function post (path, data) {
  return window.fetch(URL + path, {       // was "path", not URL
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}