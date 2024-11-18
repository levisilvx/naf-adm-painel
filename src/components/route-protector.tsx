"use client"
import { getAuth } from 'firebase/auth';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Loader } from 'lucide-react';

const RouteProtector = (WrappedComponent: any) => {
  return function RouteProtector(props: any) {
    const auth = getAuth()
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
 
    {/*
    useEffect(() => {
      // If the user is not authenticated, redirect to the login page
      if (!user) {
        router.push('/signin');
      }
    }, []);
  */}

    if(loading) {
      return(
        <div className='h-screen bg-background flex justify-center items-center'>
          <div className='animate-pulse'>
            <Loader className='h-10 w-10 animate-spin'/>
          </div>
        </div>
      )
    }

    if (!user) {
      router.push('/signin');
    } 
    return <WrappedComponent {...props} />;
  };
};

export default RouteProtector;