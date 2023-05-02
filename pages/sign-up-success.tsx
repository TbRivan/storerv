import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SignUpSuccess() {
  return (
    <>
      <Head>
        <title>Sign Up Success</title>
      </Head>
      <section className="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
        <div className="container-fluid">
          <div className="text-center">
            <Image
              src="/icon/complete-signup.svg"
              width={316}
              height={300}
              alt="complete-signup"
            />
          </div>
          <div className="pt-70 pb-md-50 pb-150">
            <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
              Well Done!
            </h2>
            <p className="text-lg text-center color-palette-1 m-0">
              Now You can TopUp
              <br className="d-sm-block d-none" />
              and Be a Winner
            </p>
          </div>
          <div className="button-group d-flex flex-column mx-auto">
            <Link
              className="btn btn-top-up fw-medium text-lg text-white rounded-pill"
              href="/sign-in"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
