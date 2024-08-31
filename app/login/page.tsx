// import AcmeLogo from "@/app/ui/acme-logo";
import MyLogo from "@/public/new_logo_w.png";
import LoginForm from "@/app/ui/login-form";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
}

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36 flex *:my-auto">
            {/* <AcmeLogo /> */}
            <Image src={MyLogo} height="50" width="50" alt="moses-logo" />
            <h1 className="text-2xl font-bold px-2">MoseTech</h1>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
