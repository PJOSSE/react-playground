// Correction exo5

// Si vous reprenez ce code, commentez l'un des deux composants

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
      // déclenchée au premier rendu uniquement
      this.timerID = setInterval(
          () => this.tick(),
          1000
        );
  }

  componentWillUnmount() {
      // déclenchée au moment ou le composant va être supprimé
      clearInterval(this.timerID);
  }

  tick() {
      this.setState({
          date: new Date()
      })
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Clock() {
const [date, setDate] = React.useState(new Date());
const intervalRef = React.useRef();

React.useEffect(() => {
  tick();
  // do stuff
}, []); // Déclenché a CHAQUE rendu => componentWillMount

const tick = () => {
  intervalRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);
};

return (
  <div>
    <h1>Bonjour, monde !</h1>
    <h2>Il est {date.toLocaleTimeString()}.</h2>
  </div>
);
}
ReactDOM.render(<Clock />, document.getElementById("app"));
