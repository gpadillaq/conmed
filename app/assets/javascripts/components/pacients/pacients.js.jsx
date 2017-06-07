var Pacients = React.createClass({
    render: function() {
        pacients = this.props.pacients.map( function(pacient) {
            return (
                <Pacient pacient={pacient} key={pacient.id} />
            );
        });
        return (
            <div>
                <h1>Pacientes</h1>
                <div id='pacients'>
                    <table id="pacientes" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Genero</th>
                                <th>Edad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacients}
                        </tbody>
                    </table>

                    <button className="btn btn-success pull-right">Añadir Paciente</button>

                </div>
            </div>
        );
    }
});