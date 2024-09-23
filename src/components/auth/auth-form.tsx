import router from "next/dist/client/router";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const handleBiometricLogin = () => {
  router.push("/retirada");
};

export function AuthForm() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/profile");
    } else {
      // Handle errors
    }
  }

  return (
    <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
      <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
        <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          Login
        </h2>

        <form onSubmit={handleBiometricLogin}>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Coloque seu email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Senha
            </label>
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
            className="mt-6 flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50"
            onClick={handleBiometricLogin}
          >
            <Icon icon="nimbus:fingerprint" className="text-2xl" />
            Entrar com Biometria
          </button>
        </form>
      </div>
    </div>
  );
}
