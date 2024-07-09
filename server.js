const express = require('express');
const { faker } = require('@faker-js/faker'); //importo la API faker segun la documentacion 

const app = express();


class Cliente{
  constructor(){
    this._id= faker.number.int()
    this.primer_nombre= faker.person.firstName(); 
    this.apellido= faker.person.lastName();
    this.número_de_teléfono= faker.phone.number();
    this.email= faker.internet.email() 
    this.contraseña= faker.internet.password()
  }
}

class Empresa{
  constructor(){
    this._id= faker.number.int()
    this.nombre= faker.person.firstName();
    this.direccion= {
      calle: faker.location.street(),
      ciudad: faker.location.city(),
      estado: faker.location.state(), 
      codigo_postal: faker.location.zipCode(),
      pais:faker.location.country()
    }
  
  }
}

//http://localhost:8080/api/users/new
app.get('/api/users/new', (req, res) => {
  const cliente = new Cliente; 
  return res.status(200).json(cliente);
});

//http://localhost:8080/api/companies/new
app.get('/api/companies/new', (req, res) => {
  const empresa = new Empresa; 
  return res.status(200).json(empresa);
});

//http://localhost:8080/api/user/companies
app.get('/api/user/companies', (req, res) => {
  const cliente = new Cliente; 
  const empresa = new Empresa; 
  res.status(200).json({cliente, empresa}); //devolver las dos clases como un objeto en mi respuesta JSON 
});

app.listen(8080, () => {
  console.log('El servidor ya está encendido en el puerto 8080.');
});