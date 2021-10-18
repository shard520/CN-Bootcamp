const Navbar = props => {
  return (
    <nav>
      <ul className="navbar">
        {props.links.map((item, i) => {
          return (
            <li key={i.toString()}>
              <a href={item.link}>{item.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
