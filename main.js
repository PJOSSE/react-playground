// Correction basique exo7

function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous connecter</h1>;
}
function Greeting(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
    }

  return(
      <React.Fragment>
          {isLoggedIn ? 
          <React.Fragment>
              <UserGreeting />
              <button onClick={handleLogOut}>Se déconnecter</button>
          </React.Fragment> : 
          <React.Fragment>
              <GuestGreeting />
              <button onClick={handleLogIn}>Se connecter</button>
          </React.Fragment> }
      </React.Fragment>
  )
}

ReactDOM.render(
  <Greeting />,
  document.querySelector('#app')
);


// ---------------------------------------------------
// Correction exo7 avec remontée d'état 

function UserGreeting({ toggleIsLoggedIn }) {

const [text, setText] = React.useState('Simon')
return (
  <React.Fragment>
    <h1>Bienvenue !</h1>
    <button onClick={() => toggleIsLoggedIn(text)}>Se déconnecter</button>
  </React.Fragment>
);
}

function GuestGreeting({ toggleIsLoggedIn }) {
const [text, setText] = React.useState('Adrien')
return (
  <React.Fragment>
    <h1>Veuillez vous inscrire.</h1>
    <button onClick={() => toggleIsLoggedIn(text)}>Se connecter</button>
  </React.Fragment>
);
}
function Greeting() {
const [isLoggedIn, setIsLoggedIn] = React.useState(false)


const toggleIsLoggedIn = (value) => {
  console.log(value)
  setIsLoggedIn(!isLoggedIn);
}



return(
  <React.Fragment>
    {
    isLoggedIn ?
    <UserGreeting toggleIsLoggedIn={toggleIsLoggedIn} />
    :
    <GuestGreeting toggleIsLoggedIn={toggleIsLoggedIn} />  
    }
  </React.Fragment>
)


/*   if(variable === true) {
  console.log("oui")
  //do stuff
} else {
  console.log("non")
  // do something else
}

variable === true ? console.log("oui") : console.log("non") */
}

ReactDOM.render(
<Greeting />,
document.getElementById('app')
);
