import React from 'react';
import { connect } from 'react-redux'
import { initLoad } from './store/actions/people-actions';

class App extends React.PureComponent {

  componentDidMount() {
    this.props.initLoad();
  }

  render() {
    const { people } = this.props;
    
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.peopleReducer.people
});

const mapDispatchToProps = dispatch => ({
  initLoad: () => dispatch(initLoad())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
