import NavBar from '../NavBar/NavBar';
import Wrapper from '../Wrapper/Wrapper';

export default function Header() {
  return (
    <Wrapper>
      <header
        className="flex
	  justify-center pt-5"
      >
        <NavBar />
      </header>
    </Wrapper>
  );
}
