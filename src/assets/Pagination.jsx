import React from "react";
import { FaGreaterThan } from "react-icons/fa";

function Pagination() {
  return (
    <div className="pagination">
      <a href="#">1</a>
      <a className="active" href="#">
        2
      </a>
      <a href="#">3</a>

      <a href="#">&gt;</a>
    </div>
  );
}

export default Pagination;
