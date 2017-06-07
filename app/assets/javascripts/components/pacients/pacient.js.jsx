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

    render() {
        return (
            <tr>
                <td>{ this.state.pacient.first_name }</td>
                <td>{ this.state.pacient.last_name }</td>
                <td>{ this.state.pacient.gender }</td>
                <td>{ this.state.pacient.age }</td>
            </tr>
        );
    }
});