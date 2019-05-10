import React from 'react';
import { connect } from 'react-redux'
import { initLoad, changePage } from './store/actions/people-actions';
import Pagination from './components/pagination/Pagination'

class App extends React.PureComponent {

  componentDidMount() {
    this.props.initLoad();
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <h3>{`Page number: ${this.props.currentPage ? this.props.currentPage : 0}`}</h3>
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
  changePage: (page) => dispatch(changePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
