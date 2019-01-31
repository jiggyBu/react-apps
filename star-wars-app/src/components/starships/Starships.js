import React, { Component } from 'react'
import { starshipChangePage, starshipInitLoad } from '../../store/actions/starshipActions';
import { connect } from 'react-redux';
import Starship from './Starship';

class Starships extends Component {
  
  componentDidMount = () => {
    this.props.starshipInitLoad();
  }

  render() {

    const { starships, count, page } = this.props;
    const strashipList = starships && starships.length ? (
      starships.map((s, i) => {
        return (
          <Starship starship={s} key={i} />
        )
      })
    ) : (
      <div>
        Loading starships...
      </div>
    )
    
    return (
      <div className="starships-container">
        <div className="row">
          {strashipList}
        </div>
        <div className="row container">
          { page && page.previous ? (
                <button onClick={() => starshipChangePage(page.previous)} className="btn waves-effect waves-light" type="submit" name="action">
                Prev
              </button>
            ) : null
          }
          { page && page.next ? (
            <button onClick={() => starshipChangePage(page.next)} className="btn waves-effect waves-light" type="submit" name="action">
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
    starships: state.starships.starships,
    count: state.starships.count,
    page: state.starships.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    starshipInitLoad: () => dispatch(starshipInitLoad()),
    starshipChangePage: (url) => dispatch(starshipChangePage(url)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
