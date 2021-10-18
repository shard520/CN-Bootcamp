const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.links.map((item, i) => {
          return (
            <li key={i.toString()}>
              <a href={item.link}>{item.text}</a>
            </li>
          );
        })}
      </ul>
      <p>&copy; 2021 Catbook Inc.</p>
    </footer>
  );
};

export default Footer;
