import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount,changePage}) => {
    
    return (
        <div>
            <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            // breakLabel=""
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2} // ...後顯示的頁數量
            onPageChange={changePage}
            containerClassName={"paginationContainer"}
            // previousLinkClassName={} //預設為previous next
            // nextLinkClassName={"NextPrev_link"}
            disabledLinkClassName={"paginationDisabled"} //Link = a tag
            activeClassName={"paginationActive"}
            />
        </div>
    )
}

export default Pagination