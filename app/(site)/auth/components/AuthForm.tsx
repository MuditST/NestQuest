'use client';

import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

import Input from "@/app/components/inputs/Input";

import Button from "@/app/components/Button";
import { toast } from "react-hot-toast";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/explore')
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  
    if (variant === 'REGISTER') {
      axios.post('/api/register', data)
      .then(() => signIn('credentials', {
        ...data,
        redirect: false,
      }))
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }

        if (callback?.ok) {
          router.push('/explore')
        }
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => setIsLoading(false))
    }

    if (variant === 'LOGIN') {
      signIn('credentials', {
        ...data,
        redirect: false
      })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }

        if (callback?.ok) {
          router.push('/explore')
        }
      })
      .finally(() => setIsLoading(false))
    }
  }

  

  return ( 
    <div className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    ">
        <div className="
        bg-gray-900/30
        px-4
        py-6
        shadow
        sm:rounded-2xl
        sm:px-10">
            
            <form className="
            space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            >
                {variant === "REGISTER" && (
                    <Input  disabled={isLoading} errors={errors} id="name" label="Name" register={register}/>
                )}
                <Input  disabled={isLoading} errors={errors} id="email" type="email" label="Email" register={register}/>
                <Input  disabled={isLoading} errors={errors} id="password" type="password" label="Password" register={register}/>
                <div>
                    <Button 
                    disabled={isLoading}
                    fullWidth
                    type="submit">{variant === "LOGIN" ? "Sign in": "Register"}</Button>
                </div>
                
            </form>
            <div className="mt-6" >
                    <div className="relative">
                        <div className="
                        absolute
                        inset-0
                        flex
                        items-center">
                            <div className="w-full border-t border-gray-300"></div>
                            <span className="flex-grow px-2 text-gray-200">
                                or 
                            </span>
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        
                            
                        </div>
                        
                    </div>
                    <div className="
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-10
                        px-2
                        text-gray-300">
                            <div>{variant==="LOGIN" ? "New to NestQuest?" : "Already have a account?"}</div>
                        <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer hover:text-amber-400">
                            {variant === "LOGIN" ? "Create an account": "Login"}
                        </div>
                        </div>
                    
            </div>
            
        </div>
  );
}
 
export default AuthForm;
