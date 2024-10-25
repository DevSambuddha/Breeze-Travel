import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-title">
        <a className="link" href="/">
          BreezeTravel
        </a>
      </h1>
      <nav className="d-flex align-center gap-large">
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-symbols-outlined profile-option menu">
            menu
          </span>
          <span className="material-symbols-outlined profile-option person">
            person
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
