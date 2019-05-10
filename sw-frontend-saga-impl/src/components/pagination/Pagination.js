import React from 'react'

const Pagination = ( { totalPages, currentPage, pageAction } ) => {
    
    return (
      <div className="row container">
        {
            currentPage <= totalPages && currentPage !== 1 ?
            <button onClick={() => pageAction(currentPage - 1)} className="btn waves-effect waves-light" type="submit" name="action">
                Previous
            </button> : null
        }        
        {
            currentPage < totalPages ? 
            <button onClick={() => pageAction(currentPage + 1)} className="btn waves-effect waves-light" type="submit" name="action">
                Next
            </button> : null
        }
      </div>
    )
}

export default Pagination;