import { ClerkProvider } from '@clerk/nextjs';
import NavBar from '../NavBar/NavBar';
import Wrapper from '../Wrapper/Wrapper';

export default function Header() {
  return (
    <Wrapper>
      <ClerkProvider>
        <header
          className="flex
	  justify-center pt-5"
        >
          <NavBar />
        </header>
      </ClerkProvider>
    </Wrapper>
  );
}
