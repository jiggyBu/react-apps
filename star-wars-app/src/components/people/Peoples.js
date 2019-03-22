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

    loadMore = (page, numberOfElements) => {
        if (numberOfElements > 0) {
            page += 1;
            return true;
        }
        return false;
    }

    render() {

        const { people, totalElements, totalPages, currentPage, peopleChangePage, removePeople } = this.props;

        const peopleList = people && people.length ? (
            people.map((p, i) => <People people={p} peopleRemove={peopleRemove} key={i} />)
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

                <Pagination totalPages={totalPages} currentPage={currentPage} pageAction={peopleChangePage} />
            </div>
        )
  }
}

const mapStateToProps = (state) => {
    return {
        people: state.people.people,
        totalPages: state.people.totalPages,
        totalElements: state.people.totalElements,
        currentPage: state.people.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        peopleInitLoad: () => dispatch(peopleInitLoad()),
        peopleChangePage: (page) => dispatch(peopleChangePage(page)),
        peopleRemove: (id) => dispatch(peopleRemove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
