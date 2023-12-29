import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "@/styles/Pagination.css";
import * as types from "@/types/components/Pagination";

function Paginator({
  totalRecords,
  recordPerPage,
  onPageChange,
  presentPage
}: types.TPaginationProps) {
  // current page
  const [currentPage, setCurrentPage] = useState(presentPage ?? 1);

  // select will be -1 of page
  const handlePageChange: types.ThandlePageChange = ({selected}) => {
    onPageChange(selected + 1)
  }

  return (
    <>
       {Math.ceil(totalRecords / recordPerPage) > 1 && recordPerPage <= totalRecords && (
      <div className={`py-2`}>
      <ReactPaginate
        previousLabel={<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.35608 1.00012L1.35608 5.00012L5.35608 9.00012" stroke="#DFE1E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        }
        nextLabel={<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00342 1.00012L5.00342 5.00012L1.00342 9.00012" stroke="#253858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        }
        nextLinkClassName=" h-8 w-8 block flex items-center rounded"
        previousLinkClassName=" h-8 w-8 block flex items-center rounded"
        previousClassName="aspect-sqaure"
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(totalRecords / recordPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={`pagination items-center space-x-1`} 
        activeClassName={"active"}
        renderOnZeroPageCount={null}  
       forcePage={(presentPage? (presentPage -1) : undefined) }
      />
    </div>)}
    </>
  
  );
}

export default Paginator;
