import React from 'react'
import { connect } from 'react-redux';
import { addPerson } from '../../store/actions/people-actions'
import InputTypeText from '../misc/InputTypeText';

class AddPerson extends React.PureComponent {
    state = {
        name: null,
        eyeColor: null,
        hairColor: null,
        gender: null
    }

    componentDidMount = () => {
        // DIRTY !!
        // document.getElementById("gender").style.display = "block";
    }

    onChangeEv = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitEv = (e) => {
        e.preventDefault();
        this.setState({ id: 0 });

        // Send when formed
        setTimeout(() => {
            this.props.addPerson(this.state);
        });
    }
  
    render() {
        return (
        <div className="row">
            <form className="col s12" onSubmit={this.onSubmitEv}>
                <div className="row">
                    <InputTypeText name={'name'} onChangeEv={this.onChangeEv} placeholder={'Name'} rqd={true} />
                    <InputTypeText name={'hairColor'} onChangeEv={this.onChangeEv} placeholder={'Hair color'} />
                    <InputTypeText name={'eyeColor'} onChangeEv={this.onChangeEv} placeholder={'Eye color'} />

                    <div className="input-field col s3" onChange={this.onChangeEv}>
                        <select id="gender" name="gender">
                            <option value="">--any--</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light" type="submit">
                        Submit
                </button>
                </div>
            </form>
        </div>
        )
  }
}

const mapDispatchToProps = dispatch => ({
    addPerson: (person) => dispatch(addPerson(person))
});

export default connect(null, mapDispatchToProps)(AddPerson)
