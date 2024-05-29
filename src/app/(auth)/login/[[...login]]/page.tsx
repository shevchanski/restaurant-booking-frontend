import { ClerkProvider, SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <ClerkProvider>
      <SignIn />
    </ClerkProvider>
  );
}
