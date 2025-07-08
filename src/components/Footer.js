import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const currYear = new Date().getFullYear();

const Footer = () => { 
  const { theme } = useContext(ThemeContext);

    return (
    <footer className={'footer ${theme}'}>
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Prasad Dhole</strong>
      </p>
    </footer>
  );
};

export default Footer;
