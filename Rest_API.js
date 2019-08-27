const fetch = require('isomorphic-fetch');
const express = require('express');

const app = express();
app.use(express.json())
const port = process.env.PORT || 8000


app.get('/v1/users/:userId', (req, res) => {
  fetch(`http://localhost:3000/users/${req.params.userId}`).then((responseUser) => {
    return responseUser.json().then((dataUser) => {
      if (dataUser.error) {
        console.log(dataUser.error)
      } else {
        fetch(`http://localhost:3000/companies/${dataUser.companyId}`).then((responseCompany) => {
          return responseCompany.json().then((dataCompany) => {
            if (dataCompany.error) {
              console.log(dataCompany.error)
            } else {
              let result = {};
              result.id = dataUser.id;
              result.firstName = dataUser.firstName;
              result.age = dataUser.age;
              result.company = dataCompany;
              console.log(JSON.stringify(result));
              res.send(JSON.stringify(result));
            }
          });
        })
      }
    });
  })
});

app.get('/v1/users/:userId/company', (req, res) => {
  fetch(`http://localhost:3000/users/${req.params.userId}`).then((responseUser) => {
    return responseUser.json().then((dataUser) => {
      if (dataUser.error) {
        console.log(dataUser.error)
      } else {
        fetch(`http://localhost:3000/companies/${dataUser.companyId}`).then((responseCompany) => {
          return responseCompany.json().then((dataCompany) => {
            if (dataCompany.error) {
              console.log(dataCompany.error)
            } else {
              console.log(JSON.stringify(dataUser));
              res.send(JSON.stringify(dataCompany));
            }
          });
        })
      }
    });
  })
});

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})