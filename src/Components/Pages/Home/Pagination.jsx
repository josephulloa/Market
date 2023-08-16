import React from "react";

const Pagination = ({ pagina, setPagina }) => {
  const previusPage = () => {
    setPagina(pagina - 1);
  };

  const nextPage = () => {
    setPagina(pagina + 1);
  };

  return (
    <div className="btn-container">
      <button disabled={pagina <= 0} onClick={previusPage}>
        Previus
      </button>

      <button  onClick={nextPage}>
        next
      </button>
    </div>
  );
};

export default Pagination;
