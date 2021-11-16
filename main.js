// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

const firstName = 'toto';
const lastName = 'glandu';

class FirstName extends React.Component {
render() {
    /*
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    */

    // Solution sans bonus
    return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}
}
class LastName extends React.Component {
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
