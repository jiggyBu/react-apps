import React from 'react';
import { connect } from 'react-redux'
import { initLoad, changePage, removePersonById } from './store/actions/people-actions';
import Pagination from './components/pagination/Pagination'
import AddPerson from './components/people/AddPerson';

class App extends React.PureComponent {

  componentDidMount() {
    this.props.initLoad();
  }

  render() {

    const { people, removePersonById, currentPage, totalPages, changePage, errorMsg } = this.props;
    
    const peopleList = people && people.length ? people.map((p, i) => <div onClick={() => removePersonById(p.id)} key={i}>{p.name}</div>) : null

    return (
      <div className="App">
        <h3>{`Page number: ${currentPage ? currentPage : 0}`}</h3>

        <AddPerson />

        <div>
          {peopleList}
        </div>

        {
          errorMsg ? <h1>{errorMsg}</h1> : null
        }

        <Pagination totalPages={totalPages} currentPage={currentPage} pageAction={changePage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.peopleReducer.people,
  totalPages: state.peopleReducer.totalPages,
  totalElements: state.peopleReducer.totalElements,
  currentPage: state.peopleReducer.currentPage,
  errorMsg: state.peopleReducer.errorMsg
});

const mapDispatchToProps = dispatch => ({
  initLoad: () => dispatch(initLoad()),
  changePage: (page) => dispatch(changePage(page)),
  removePersonById: (id) => dispatch(removePersonById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
