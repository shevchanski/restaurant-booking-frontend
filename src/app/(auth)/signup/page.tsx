import AuthForm from '@/components/AuthForm/AuthForm';

export default function SignupPage() {
  return (
    <div className="flex h-fit items-center justify-center">
      <AuthForm isLoginForm={false} />
    </div>
  );
}
