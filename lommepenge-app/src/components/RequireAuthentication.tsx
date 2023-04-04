"use client"
import useMongoUserStore from '@/stores/AuthStore';
import LoginForm from '@/components/LoginForm';
import { PropsWithChildren } from 'react';

const RequireAuthentication = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useMongoUserStore((state) => state.isAuthenticated)

  return (
    <>
    {
      isAuthenticated ? children : <LoginForm />
    }
    </>
  )
}

export default RequireAuthentication;
