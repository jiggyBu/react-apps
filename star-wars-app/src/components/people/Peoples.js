import React, { Component } from 'react'
import { peopleInitLoad, peopleChangePage, peopleRemove } from '../../store/actions/peopleActions';
import { connect } from 'react-redux';
import People from './People';
import Pagination from '../navigation/Pagination';
import AddPeople from './AddPeople';

class Peoples extends Component {

    componentDidMount = () => {
        this.props.peopleInitLoad();
    }

    render() {

        const { people, count, page, peopleChangePage, removePeople } = this.props;
        
        const peopleList = people && people.length ? (
            people.map((p, i) => {
                return (
                    <People people={p} peopleRemove={peopleRemove} key={i} />
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

                <AddPeople />

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
        peopleChangePage: (url) => dispatch(peopleChangePage(url)),
        peopleRemove: (id) => dispatch(peopleRemove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
