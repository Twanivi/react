import './Header.css';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';


export const Header = () => (
        <header className="App-header">
        <Logo />
        <Nav />
      </header>
    )