import OverviewContent from "@/components/organism/OverviewContent";
import SideBar from "@/components/organism/SideBar";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import jwt_decode from "jwt-decode";
import Head from "next/head";

export default function Member() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <section className="overview overflow-auto">
        <SideBar activeMenu="overview" />
        <OverviewContent />
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
