var Pacients = React.createClass({
    addNew: function () {
        location.href = "/pacients/new";
    },
    render: function () {
        pacients = this.props.pacients.map(function (pacient) {
            return (
                <Pacient pacient={pacient} key={pacient.id}/>
            );
        });
        return (
            <div>
                <h1>Pacientes</h1>
                <div>
                    <table id="pacientes" className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Genero</th>
                            <th>Edad</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {pacients}
                        </tbody>
                    </table>
                    <button className="btn btn-success pull-right" onClick={this.addNew}>Añadir Paciente</button>
                </div>
            </div>
        );
    }
});
