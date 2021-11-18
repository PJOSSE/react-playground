// Correction exo9 (avec remontée d'état)
// Pour la correction en "soft mode" regardez dans le repo => https://github.com/r0ulito/react-playground/blob/exo10/main.js

function FlavorInput(props) {
  return (
    <label>
      Choisissez votre parfum favori :
      <select value={props.value} name="flavor" onChange={props.handleChange}>
        <option value="grapefruit">Pamplemousse</option>
        <option value="lime">Citron vert</option>
        <option value="coconut">Noix de coco</option>
        <option value="mango">Mangue</option>
      </select>
    </label>
  );
}

function EssayInput(props) {
  return (
    <label>
      Essay:
      <textarea
        value={props.value}
        name="essay"
        onChange={props.handleChange}
      />
    </label>
  );
}

function NameInput({ value, handleChange}) {

  // value, handleChange
  return (
    <label>
      Nom :
      <input
        type="text"
        value={value}
        name="surname"
        onChange={handleChange}
      />
    </label>
  );
}

function MainForm() {
  const [inputs, setInputs] = React.useState({
    surname: "",
    essay: "",
    flavor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  };

  const handleChange = (e) => {
    let { value, name } = e.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <NameInput value={inputs.surname} handleChange={handleChange} />
      <EssayInput value={inputs.essay} handleChange={handleChange} />
      <FlavorInput value={inputs.flavor} handleChange={handleChange} />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

ReactDOM.render(<MainForm />, document.querySelector("#app"));
