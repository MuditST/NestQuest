import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div className="
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-700">
        <div className="
        sm:mx-auto
        sm:w-full
        sm:max-w-md">
            <Image 
            alt="Logo"
            height="100"
            width="100"
            className="mx-auto w-auto"
            src="/logo.png" />
            <h2 className="
            mt-6
            text-center
            text-3xl
            font-bold
            tracking-tight
            text-white">
                Sign in to NestQuest
            </h2>
        </div>
        <AuthForm />
    </div>
  )
}

export default Auth;
