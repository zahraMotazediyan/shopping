import React, {useState, useEffect, useContext} from "react";
import ReactPaginate from "react-paginate";

///Component
import Product from "./Product";

///Context
import {ContextProducts} from "../../context/ContextProductsProvider";

///Css
import styles from "../../css/Paginate.module.css";

const Pagination = () => {

    const data = useContext(ContextProducts);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className={styles.pagination}>
                {currentItems.map(item => <Product key={item.id} productData={item}/>)}
            </div>
            <ReactPaginate className={styles.next_previous}
                           breakLabel="..."
                           nextLabel="next >"
                           onPageChange={handlePageClick}
                           pageRangeDisplayed={1}
                           pageCount={pageCount}
                           previousLabel="< previous"
                           renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination;
