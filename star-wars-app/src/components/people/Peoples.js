import React, { Component } from 'react'
import { peopleInitLoad, peopleChangePage } from '../../store/actions/peopleActions';
import { connect } from 'react-redux';
import People from './People';
import Pagination from '../navigation/Pagination';

class Peoples extends Component {
    
    componentDidMount = () => {
        this.props.peopleInitLoad();
    }

    render() {

        const { people, count, page, peopleChangePage } = this.props;
        
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
                
                {/* PAGINATION */}
                <Pagination page={page} pageAction={peopleChangePage} />
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
        peopleInitLoad: () => dispatch(peopleInitLoad()),
        peopleChangePage: (url) => dispatch(peopleChangePage(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
