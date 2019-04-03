import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/agregarCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
      localStorage.setItem(
        'citas',
        JSON.stringify(this.state.citas)
      )
  }

  crearCita = (nuevaCita) => {

    // spread operator: Obtenemos una copia del arreglo. Like .push
    const citas = [...this.state.citas, nuevaCita]

    // cambiamos citas por citas
    this.setState({
      citas
    })

  }

  borrarCita = id => {
    //obtener copia state
    const citasActuales = [...this.state.citas];

    //borra element
    const citas = citasActuales.filter(cita => cita.id !== id);

    // actualizar state
    this.setState({
      citas
    })
    //
  }

  render() {
    return (
      <div className="container">
        <Header title={'Administración de Veterinaria'}></Header>
        <div className="row">
        <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
