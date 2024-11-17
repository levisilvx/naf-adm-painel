"use client"
import { useAuth } from '../context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RouteProtector = (WrappedComponent: any) => {
  return function RouteProtector(props: any) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      // If the user is not authenticated, redirect to the login page
      if (!user) {
        router.push('/signin');
      }
    }, [user, router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    if (!user) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default RouteProtector;