import { ClerkProvider, SignUp } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <ClerkProvider>
      <SignUp />
    </ClerkProvider>
  );
}
