import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./style.module.css";

function Pagination(props) {
  const { page, limit, onChacge } = props;

  useEffect(() => {
    onChacge(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePagination = (e) => {
    const name = e.target.name;
    if (name === "paginationBtnLeft" && page > 1) {
      onChacge(page - 1, limit);
    }

    if (name === "paginationBtnRight") {
      onChacge(page + 1, limit);
    }

    if (name === "paginationSelect") {
      onChacge(page, e.target.value);
    }
  };

  return (
    <div className={style.pagination}>
      <input
        name="paginationBtnLeft"
        type="buttom"
        onClick={onChangePagination}
        className={style.pagination__btnLeft}
        defaultValue="<<"
      />

      <span className={style.pagination__page}>{page}</span>

      <input
        name="paginationBtnRight"
        type="buttom"
        onClick={onChangePagination}
        className={style.pagination__btnRight}
        defaultValue=">>"
      />

      <select
        name="paginationSelect"
        onChange={onChangePagination}
        value={limit}
      >
        <option>12</option>
        <option>24</option>
        <option>36</option>
      </select>
    </div>
  );
}

export default connect(null)(Pagination);
