import LogoStore from "@/components/atoms/LogoStore";
import SignUpForm from "@/components/organism/SignUpForm";
import Head from "next/head";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <LogoStore />
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
}
