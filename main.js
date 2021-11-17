// Correction exo 8

const App = (props) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return <UserList users={users} />;
};

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

const UserItem = ({ user : { name, email, company, website, phone }}) => {

// const UserItem = (props) => {
//   let { name, email, company, website, phone, address } = props.user

  return (
    <React.Fragment>
      <li>{name}</li>
      <li>{email}</li>
      <li>{company.name}</li>
      <li>{phone}</li>
      <li>{website}</li>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
