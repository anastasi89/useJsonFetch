import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import PropTypes from "prop-types";

export default function DataExample({ endpoint, title }) {
  const [data, error, loading] = useJsonFetch(
  );

  return (
    <div>
      <span>
        {title}:{" "}
        {(loading && "Загрузка...") ||
          (data && data.status) ||
          (error && "Ошибка!")}
      </span>
    </div>
  );
}

DataExample.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
