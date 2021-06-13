import './Header.css';

const Header = props => {
  return (
    <div>
      <ul>
        <li>{props.options[0]}</li>
        <li>{props.options[1]}</li>
      </ul>
    </div>
  );
};

export default Header;