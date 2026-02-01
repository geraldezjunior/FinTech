import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [Inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={Inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
