// Class component
//class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

const firstName = 'toto';
const lastName = 'glandu';

class FirstName extends React.Component {

//     ......bon si je comprend bien, il y a useState et  useEffect. à utiliser. 
//    l'un useState sert à renvoyer une valeur d’état local et une fonction pour la mettre à jour.
// const [state, setState] = useState(initialState);
// Renvoie une valeur d’état local et une fonction pour la mettre à jour.

// Pendant le rendu initial, l’état local (state) a la même valeur que celle passée en premier argument (initialState).

// La fonction setState permet de mettre à jour l’état local. Elle accepte une nouvelle valeur d’état local et planifie un nouveau rendu du composant.
// Au cours des rendus suivants, la première valeur renvoyée par useState sera toujours celle de l’état local le plus récent, une fois les mises à jour effectuées.
   
    
        /*
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    */
    // Solution sans bonus
    
    const [state, setState] = useState(initialState);
    useEffect(() => {
    alert(`Bonjour {Firstname}`)
});
    render() {
    return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}
} setState(newState);

class LastName extends React.Component {
     const [state, setState] = useState(initialState);
    useEffect(() => {
    alert(`Bonjour {Firstname}`)
});
render() {
    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    return <span className="red-text">{props.text.toUpperCase()}</span>

}
}
const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
