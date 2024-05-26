import AuthForm from '@/components/AuthForm/AuthForm';

export default function LoginPage() {
  return (
    <div className="flex h-max items-center justify-center">
      <AuthForm isLoginForm />
    </div>
  );
}
