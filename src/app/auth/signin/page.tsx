'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation'; // Importa o useRouter para navegação

const SignIn: React.FC = () => {
  const router = useRouter();

  const handleBiometricLogin = () => {
    router.push('/retirada');
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
      <div className="flex flex-wrap items-center justify-center h-full">
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

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">Login</h2>

            <form onSubmit={handleBiometricLogin}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Coloque seu email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Senha</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Coloque sua senha"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  />
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-black bg-black p-4 text-white transition hover:bg-opacity-90"
                onClick={handleBiometricLogin} 
              >
                Entrar
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 mt-6"
                onClick={handleBiometricLogin} 
              >
                <Icon icon="nimbus:fingerprint" className="text-2xl" />
                Entrar com Biometria
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
