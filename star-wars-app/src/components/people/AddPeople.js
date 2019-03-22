import React, { Component } from 'react'
import { peopleAdd } from '../../store/actions/peopleActions';
import { connect } from 'react-redux';

class AddPeople extends Component {
    state = {
        name: null,
        eyeColor: null,
        hairColor: null,
        gender: null
    }

    componentDidMount = () => {
        // DIRTY !!
        document.getElementById("gender").style.display = "block";
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
            this.props.peopleAdd(this.state);
        });
    }
  
    render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmitEv}>
            <div className="row">
                <div className="input-field col s3">
                    <input id="name" placeholder="Name" required name="name" type="text" className="validate" onChange={this.onChangeEv} />
                    <label htmlFor="Name"></label>
                </div>
                <div className="input-field col s3">
                    <input id="hairColor" placeholder="Hair color" name="hairColor" type="text" className="validate" onChange={this.onChangeEv} />
                    <label htmlFor="hairColor"></label>
                </div>
                <div className="input-field col s3">
                    <input id="eyeColor" name="eyeColor" placeholder="Eye color" type="text" className="validate" onChange={this.onChangeEv} />
                    <label htmlFor="eyeColor"></label>
                </div>
                <div className="input-field col s3" onChange={this.onChangeEv}>
                    <select id="gender" name="gender">
                        <option value="">--any--</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
            </div>
                {/* DROPDOWN - TEST FOR NOW ! */}
                <input type="hidden" value="Male" name="gender" id="gender" />
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

const mapDispatchToProps = (dispatch) => {
    return {
        peopleAdd: (ppl) => dispatch(peopleAdd(ppl))
    }
}

export default connect(null, mapDispatchToProps)(AddPeople)
