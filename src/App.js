import React from "react";
import DataExample from "./components/DataExample";

function App() {
  return (
    <>
      <DataExample endpoint={"data"} title={"Обычная загрузка"} />
      <DataExample endpoint={"error"} title={"Ошибка"} />
      <DataExample endpoint={"loading"} title={"Загрузка с задержкой"} />
    </>
  );
}

export default App;
