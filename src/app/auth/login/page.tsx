'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { AuthForm } from '@/components/auth/auth-form';

const SignIn: React.FC = () => {
  const router = useRouter();

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
      <div className="flex flex-wrap items-center justify-center h-full">
        {/* Area para o logo */}
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-17.5 text-center">
            <Link className="mb-5.5 inline-block" href="/">
              <Image
                className="hidden dark:block"
                src={"/images/logo/Agro-Roque.png"}
                alt="Logo"
                width={196}
                height={52}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/Agro-Roque.png"}
                alt="Logo"
                width={196}
                height={52}
              />
            </Link>
          </div>
        </div>

        {/* Area para o login */}
        <AuthForm />
      </div>
    </div>
  );
};

export default SignIn;
