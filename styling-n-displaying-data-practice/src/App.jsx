import Navbar from "./components/Navbar.jsx";

function FirstComponent() {
  return <button>This is Button</button>;
}

const student = {
  username: "Hashir Dilmurad Zai",
  age: 23,
  imgUrl: "Link",
};

const smit = {
  color: "red",
  backgroundColor: "black",
  fontSize: "50px",
};

function App() {
  return (
    <>
      <Navbar />
      <br />
      <FirstComponent />
      <h1 className={"hello" + "world"} style={smit}>
        Hashir React Project Deployment
      </h1>
      <br />
      <ul>
        <li>{student.username}</li>
        <li>{student.age}</li>
        <li>{student.imgUrl}</li>
      </ul>
    </>
  );
}

export default App;
