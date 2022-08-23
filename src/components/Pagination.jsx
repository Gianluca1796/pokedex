import React from "react";

const Pagination = (props) => {
    const { page, totalPages, onLeftClick, onRightClick } = props;
    return (
        <div className="pagination-container">
            <button className="back-button" onClick={onLeftClick}>
                <img src="/img/flecha-izquierda.png" alt="fleza-izq" />
            </button>
            <div>
                Page {page} to {totalPages}
            </div>
            <button className="back-button" onClick={onRightClick}>
                <img src="/img/flecha-correcta.png" alt="flecha-der" />
            </button>
        </div>
    );
};

export default Pagination;
