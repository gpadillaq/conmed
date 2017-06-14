var NewPacient = React.createClass({
    getInitialState() {
        return {
            pacients: this.props.pacients,
            pacient: {
                first_name: '',
                last_name: '',
                gender: '',
                age: '',
            },
            errors: {}
        }
    },

    handleFirstNameChange(e) {
        var newPacient = this.state.pacient;
        newPacient.first_name = e.target.value;
        this.setState({ first_name : newPacient});
    },

    handleLastNameChange(e) {
        var newPacient = this.state.pacient;
        newPacient.last_name = e.target.value;
        this.setState({last_name: newPacient});
    },

    handleGenderChange(e) {
        var newPacient = this.state.pacient;
        newPacient.gender = e.target.value;
        this.setState({gender: newPacient});
    },

    handleAgeChange(e) {
        var newPacient = this.state.pacient;
        newPacient.age = e.target.value;
        this.setState({age: newPacient});
    },

    savePacient() {
        var that = this;
        $.ajax({
            method: 'POST',
            data: {
                pacient: that.state.pacient,
            },
            url: '/pacients.json',
            success: function(res) {
                var newPacientList = that.state.pacients;
                newPacientList.push(res);
                that.setState({
                    pacients: newPacientList,
                    pacient: {
                        first_name: '',
                        last_name: '',
                        gender: '',
                        age: ''
                    },
                    errors: {}
                });
            },
            error: function(res) {
                that.setState({errors: res.responseJSON.errors})
            }
        });
    },

    render: function() {
        return (
            <div>
                <h1>Añadir Paciente</h1>

                <div className="form-group">
                    <label className="control-label" for="pacient_id">Nombre:</label>
                    <input type="text" onChange={this.handleFirstNameChange} /><br />
                    <span style={{color: 'red'}}>{ this.state.errors.first_name }</span>
                </div>

                <div className="form-group">
                    <label className="control-label" for="pacient_id">Apellido:</label>
                    <input type="text" onChange={this.handleLastNameChange} /><br />
                    <span style={{color: 'red'}}>{ this.state.errors.last_name }</span>
                </div>

                <div className="form-group">
                    <label className="control-label" for="pacient_id">Género:</label>
                    <input type="text" onChange={this.handleGenderChange} /><br />
                    <span style={{color: 'red'}}>{ this.state.errors.gender }</span>
                </div>

                <div className="form-group">
                    <label className="control-label" for="pacient_id">Edad:</label>
                    <input type="text" onChange={this.handleAgeChange} /><br />
                    <span style={{color: 'red'}}>{ this.state.errors.age }</span>
                </div>

                <button className="btn btn-success pull-right" onClick={ this.savePacient}>Guardar</button>

            </div>
        );
    }

});
