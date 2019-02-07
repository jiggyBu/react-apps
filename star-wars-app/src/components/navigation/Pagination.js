import React from 'react'

const Pagination = ( { page, pageAction } ) => {
    return (
      <div className="row container">
      {
            page && page.previous ? (
                <button onClick={() => pageAction(pageAction.previous)} className="btn waves-effect waves-light" type="submit" name="action">
                    Prev
                </button>
            ) : null
        }
        {
            page && page.next ? (
                <button onClick={() => pageAction(page.next)} className="btn waves-effect waves-light" type="submit" name="action">
                    Next
                </button>
            ) : null
        }
      </div>
    )
}

export default Pagination;