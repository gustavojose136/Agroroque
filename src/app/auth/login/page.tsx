'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/auth/loginForm';

const SignIn: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#F0F4F9] ">
      <div className="w-full max-w-[60%] rounded-3xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative flex flex-wrap items-center">
          <div className="hidden h-full min-h-full w-full items-center justify-center xl:flex xl:w-1/2">
            <div className="relative w-[450px] h-[250px] text-center">
              <Link className="mb-5.5 inline-block" href="/">
                {/* // COLOCAR IMAGEM COM QUALIDADE MELHOR */}
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/Agro-Roque.png"}
                  alt="Logo"
                  fill
                  objectFit="cover"
                />

                {/* // COLOCAR IMAGEM COM QUALIDADE MELHOR */}
                <Image
                  className="dark:hidden"
                  src={"/images/logo/Agro-Roque.png"}
                  alt="Logo"
                  fill
                  objectFit="cover"
                />
              </Link>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
