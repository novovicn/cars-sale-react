import React from 'react';
import './Pagination.css';

export const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
                {pageNumbers.map(number => (
                    <button onClick={() => paginate(number)} key={number} className="pagination__btn">
                        {number}
                    </button>
                ))}
        </div>
    )
}
