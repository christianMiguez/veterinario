import React, { Component } from 'react';
import uuid from 'uuid'

class AgregarCita extends Component {

  nombreMascotaRef = React.createRef();
  duenoMascotaRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  state = {
    error: false
  }


  crearNuevaCita = e => {
    e.preventDefault();

    const mascota    = this.nombreMascotaRef.current.value,
          dueno      = this.duenoMascotaRef.current.value,
          fecha      = this.fechaRef.current.value,
          hora       = this.horaRef.current.value,
          sintomas   = this.sintomasRef.current.value;

    if(mascota === '' || dueno === '' || fecha === '' || hora === '' || sintomas === '' ) {
      this.setState({
        error: true
      });
    } else {
      const nuevaCita = {
        id: uuid(), mascota, dueno, fecha, hora, sintomas
      }
      // se envia el objeto al padre para actualizar el state
      this.props.crearCita(nuevaCita);

      //reset form
      e.currentTarget.reset();

      this.setState({
        error: false
      });
    }


  }

  render() {
    const errorExists = this.state.error;

    return(
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agregar las Citas aquí</h2>

          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                <div className="col-sm-8 col-lg-10">
                    <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                <div className="col-sm-8 col-lg-10">
                    <input ref={this.duenoMascotaRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                    <input ref={this.fechaRef} type="date" className="form-control" />
                </div>

                <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                <div className="col-sm-8 col-lg-4">
                    <input ref={this.horaRef} type="time" className="form-control" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                <div className="col-sm-8 col-lg-10">
                    <textarea ref={this.sintomasRef} className="form-control"></textarea>
                </div>
            </div>
            <div className="form-group row justify-content-end">
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-success w-100">Agregar</button>
                </div>
            </div>
        </form>

    {errorExists ?  <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}

        </div>
      </div>
    )
  }

}

export default AgregarCita
