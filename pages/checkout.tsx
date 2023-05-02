import LogoStore from "@/components/atoms/LogoStore";
import CheckoutConfirmation from "@/components/organism/CheckoutConfirmation";
import CheckoutDetail from "@/components/organism/CheckoutDetail";
import CheckoutItem from "@/components/organism/CheckoutItem";
import jwt_decode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import Head from "next/head";

interface CheckoutProps {
  user: UserTypes;
}

export default function Checkout(props: CheckoutProps) {
  const { user } = props;
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <LogoStore />
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}
export async function getServerSideProps({ req }: getServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwt_decode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  return {
    props: {
      user: userFromPayload,
    },
  };
}
