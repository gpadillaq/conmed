var Pacient = React.createClass({
    getInitialState() {
        return {
            pacient: this.props.pacient
        }
    },

    getDefaultProps() {
        return {
            pacient: []
        }
    },

    handleEdit: function() {
        console.log(this.state.pacient.id);
        location.href = "/pacients/" + this.state.pacient.id + "/edit";
    },

    render() {
        return (
            <tr>
                <td>{ this.state.pacient.first_name }</td>
                <td>{ this.state.pacient.last_name }</td>
                <td>{ this.state.pacient.gender }</td>
                <td>{ this.state.pacient.age }</td>
                <td>
                    <a className="glyphicon glyphicon-eye-open" onClick={this.handleEdit} ></a>
                </td>
            </tr>
        );
    }
});