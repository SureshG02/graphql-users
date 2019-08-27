# GraphQL vs Rest

JSON server: Start dummy JSON server using command "npm run json:server"
 
http://localhost:3000/users 

http://localhost:3000/companies 

Nodejs rest backend: Start Rest backend using command "node Rest_API.js"

http://localhost:8000/v1/users/40
 
http://localhost:8000/v1/users/40/company

Graphiql server: Start GraphQL server using command "node server.js"

http://localhost:4000/graphql

Sample GraphQL queries:


query getUser {
  user(id: "40") {
    id
    firstName
    age
    company {
      name
      description
    }
  }
}


query getCompany {
  company(id: "1") {
    name
  }
}

mutation addUser {
  addUser(firstName: "Suresh", age: 27, companyId: "3") {
    id
  }
}

mutation updateUser {
  updateUser(id: "J79O2-kE2", firstName: "Mahesh", age: 27, companyId: "3") {
    id
    firstName
  }
}

mutation deleteUser {
  deleteUser(id: "jIIc798hX") {
    id
  }
}
