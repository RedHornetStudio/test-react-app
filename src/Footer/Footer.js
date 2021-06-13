import './Footer.css';

const Footer = props => {
  return (
    <div>
      <ul>
        <li>{props.options[0]}</li>
        <li>{props.options[1]}</li>
      </ul>
    </div>
  );
};

export default Footer;
