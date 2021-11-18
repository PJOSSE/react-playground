// NOTE A MOI MEME / A REVOIR RAPIDEMENT -Base "caca" à corriger pour l'exo 10

function App() {
  const [binary, setBinary] = React.useState("");
  const [decimal, setDecimal] = React.useState("");
  const handleChange = (base, number) => {
    if(isNaN(number)) return
    if(number === '') {
      setDecimal('');
      setBinary('');
      return
    }

    switch (base) {
      case "binary":
        if(isNaN(parseInt(number, 2))) return
        setBinary(parseInt(number, 2).toString(2));
        setDecimal(parseInt(number, 2).toString(10));
        break;
      case "decimal":
        setDecimal(parseInt(number, 10));
        setBinary(parseInt(number, 10).toString(2))
        break;
    }
  };
  return (
    <React.Fragment>
      <BaseNumberInput onChangeBase={handleChange} number={decimal}>
        decimal
      </BaseNumberInput>
      <BaseNumberInput number={binary} onChangeBase={handleChange}>
        binary
      </BaseNumberInput>
    </React.Fragment>
  );
}

function BaseNumberInput(props) {
  return (
    <label>
      {props.children}:
      <input
        type="text"
        value={props.number}
        onChange={({ target: { value } }) =>
          props.onChangeBase(props.children, value)
        }
        disabled={props.disabled}
      ></input>
    </label>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
