import logo from "../logo.svg";
export default function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/login/oauth/authorize?client_id=f323333eb7ef37486efe"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </header>
    </div>
  );
}
