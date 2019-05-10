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

    const { people, removePersonById } = this.props;

    const peopleList = people && people.length ? people.map((p, i) => <div onClick={() => removePersonById(p.id)} key={i}>{p.name}</div>) : null

    return (
      <div className="App">
        <h3>{`Page number: ${this.props.currentPage ? this.props.currentPage : 0}`}</h3>

        <AddPerson />

        <div>
          {peopleList}
        </div>

        <Pagination totalPages={this.props.totalPages} currentPage={this.props.currentPage} pageAction={this.props.changePage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.peopleReducer.people,
  totalPages: state.peopleReducer.totalPages,
  totalElements: state.peopleReducer.totalElements,
  currentPage: state.peopleReducer.currentPage,
});

const mapDispatchToProps = dispatch => ({
  initLoad: () => dispatch(initLoad()),
  changePage: (page) => dispatch(changePage(page)),
  removePersonById: (id) => dispatch(removePersonById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
