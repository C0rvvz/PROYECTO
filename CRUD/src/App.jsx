import React, { Component } from 'react';
import './assets/styles/base.css';
import './assets/styles/heroe.css';
import './assets/styles/components/Header.css';
import './assets/styles/components/Logo.css';
import './assets/styles/components/Table.css';
import './assets/styles/pages/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'reactstrap';
import EditHeroModal from './components/EditHeroModal';
import InsertHeroModal from './components/InsertHeroModal';
import { getHeroes } from './Axios/AxiosGet.jsx';

class App extends React.Component {
  state = {
    data: [
      { heroeid: 'SuperMan', alias: 'Clark Kent', poder: 'Laser' },
      { heroeid: 'Batman', alias: 'Bruce Wayne', poder: 'Pelea' },
      { heroeid: 'Wolverine', alias: 'James Logan', poder: 'Regeneracion' },
      { heroeid: 'Iron Man', alias: 'Anthony Stark', poder: 'Cohetes' },
      { heroeid: 'Spider-Man', alias: 'Peter Parker', poder: 'Telaraña' },
      { heroeid: 'Mujer Maravilla', alias: 'Diana Prince', poder: 'Fuerza' },
      { heroeid: 'Flash', alias: 'Barry Allen', poder: 'Velocidad' },
      { heroeid: 'Capitan America', alias: 'Steve Rogers', poder: 'Escudo indestructible' },
      { heroeid: 'Hulk', alias: 'Bruce Banner', poder: 'Super fuerza' },
      { heroeid: 'Thor', alias: 'Thor', poder: 'Martillo mágico' },
    ],
    modalInsertar: false,
    modalEditar: false,
    form: {
      heroeid: "",
      alias: "",
      poder: "",
    },
    hoverIndex: null
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  };

  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  };

  handleMouseEnter = (index) => {
    this.setState({ hoverIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoverIndex: null });
  };

  insertar = () => {
    const { form, data } = this.state;
    const valorNuevo = {
      heroeid: form.heroeid,
      alias: form.alias,
      poder: form.poder,
    };
    const lista = [...data, valorNuevo];
    this.setState({ data: lista, modalInsertar: false, form: { heroeid: "", alias: "", poder: "" } });
  };

  editar = () => {
    const { form, data } = this.state;
    const listaActualizada = data.map(item => {
      if (item.heroeid === form.heroeid) {
        return {
          ...item,
          alias: form.alias,
          poder: form.poder
        };
      }
      return item;
    });

    this.setState({
      data: listaActualizada,
      modalEditar: false,
      form: { heroeid: "", alias: "", poder: "" } // Limpiar el formulario después de editar
    });
  };

  eliminar = (dato) => {
    const opcion = window.confirm(`${dato.heroeid} se eliminará, ¿está seguro de esto?`);
    if (opcion) {
      const lista = this.state.data.filter((item) => item.heroeid !== dato.heroeid);
      this.setState({ data: lista });
    }
  };

  render() { 
    return (
      <Container>
        <header>
          <h1 className="title">Proyecto Código Limpio: CRUD</h1>
        </header>
        <br />
        <Button color="success" onClick={this.mostrarModalInsertar}>Ingresar nuevo héroe</Button>
        <br />
        <br />
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>HeroeID</th>
              <th>Alias</th>
              <th>Poderes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((elemento, index) => (
              <tr key={elemento.heroeid}>
                <td>{elemento.heroeid}</td>
                <td
                  onMouseEnter={() => this.handleMouseEnter(index)}
                  onMouseLeave={this.handleMouseLeave}
                >
                  {elemento.alias}
                </td>
                <td>{elemento.poder}</td>
                <td>
                  <Button color="success" onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                  <Button color="danger" onClick={() => this.eliminar(elemento)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <InsertHeroModal
          isOpen={this.state.modalInsertar}
          toggle={this.ocultarModalInsertar}
          insertar={this.insertar}
          form={this.state.form}
          handleChange={this.handleChange}
        />

        <EditHeroModal
          isOpen={this.state.modalEditar}
          toggle={this.ocultarModalEditar}
          form={this.state.form}
          handleChange={this.handleChange}
          editar={this.editar}
        />
      </Container>
    );
  }
}

export default App;
