import React, { Component } from 'react'
import { peopleInitLoad } from '../../store/actions/peopleActions';
import { connect } from 'react-redux';
import People from './People';

class Peoples extends Component {
    
    componentDidMount = () => {
        this.props.peopleInitLoad();
    }

    render() {
        const { people, count, page } = this.props;
        const peopleList = people && people.length ? (
            people.map((p, i) => {
                return (
                    <People people={p} key={i} />
                )
            })
        ) : (
            <div>
                Loading star wars guys !
            </div>
        )

        return (
            <div className="peoples-container">
                <div className="row">
                    {peopleList}
                </div>
                <div className="row">
                    {
                        page && page.prev ? (
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Prev
                            </button>
                        ) : null
                    }
                    {
                        page && page.next ? (
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                                Next
                            </button>
                        ) : null
                    }
                </div>
            </div>
        )
  }
}

const mapStateToProps = (state) => {
    return {
        people: state.people.people,
        count: state.people.count,
        page: state.people.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        peopleInitLoad: () => dispatch(peopleInitLoad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
