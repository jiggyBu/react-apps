import React, { Component } from 'react'
import { planetInitLoad, planetChangePage } from '../../store/actions/planetActions';
import Planet from './Planet';
import { connect } from 'react-redux';

class Planets extends Component {

  componentDidMount = () => {
    this.props.planetInitLoad();
  }
  
  render() {

    const { planets, count, page, planetChangePage } = this.props;

    const planetList = planets && planets.length ? (
      planets.map((p, i) => {
        return (
          <Planet planet={p} key={i} />
        )
      })
    ) : (
      <div>
        Loading planets...
      </div>
    )

    return (
      <div>
          <div className="row">
            {planetList}
          </div>

          <div className="row container">
                    {
                        page && page.previous ? (
                            <button onClick={() => planetChangePage(page.previous)} className="btn waves-effect waves-light" type="submit" name="action">
                                Prev
                            </button>
                        ) : null
                    }
                    {
                        page && page.next ? (
                            <button onClick={() => planetChangePage(page.next)} className="btn waves-effect waves-light" type="submit" name="action">
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
    planets: state.planets.planets,
    count: state.planets.count,
    page: state.planets.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    planetInitLoad: () => dispatch(planetInitLoad()),
    planetChangePage: (url) => dispatch(planetChangePage(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
