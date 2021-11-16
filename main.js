// Correction exo6

function Clock() {
  React.useEffect(() => {
    tick();
  }, []);

const [date, setDate] = React.useState(new Date());
const [color, setColor] = React.useState('black');
const intervalRef = React.useRef();

// React.useEffect(() => {
//   tick();
//   // do stuff
// }, []); // Déclenché a CHAQUE rendu => componentWillMount

// const [date, setDate] = React.useDate(new Date());
// const [color, setColor] = React.useState('black')

const tick = () => {
  setInterval(() => {
      setDate(new Date());
    }, 1000);
};

const changeColor = () => {
  let number =(1<<24) - 1;

  number = Math.floor(Math.random() * number).toString(16);
    setColor(`#${number}`);
}

const resetColor = () => {
setColor ('#000000');
}

const stopClock = () => {
  clearInterval(intervalRef.current);
  }

// const bidule = (e) =>{
//   e.target.style.color = 'red'
// }

return (
  <div>
    <h1>Hello world </h1>
    <h2 style={{color}}>Il est {date.toLocaleTimeString()}.</h2>
    <button onClick={changeColor}>Random color</button>
    <button onClick={resetColor}>Reset color</button>
    <br/>
    <button onClick={stopClock}>Stop clock</button>
    <button onClick={tick}>Restart clock</button>
  </div>
);
}

ReactDOM.render(<Clock />, document.getElementById("app"));
