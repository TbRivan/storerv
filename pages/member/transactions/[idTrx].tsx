import SideBar from "@/components/organism/SideBar";
import TransactionsDetailContent from "@/components/organism/TransactionDetailContent";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "@/services/data-types";
import { getTransactionDetail } from "@/services/member";
import jwt_decode from "jwt-decode";
import Head from "next/head";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <>
      <Head>
        <title>Transaction Details</title>
      </Head>
      <section className="transactions-detail overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionsDetailContent data={transactionDetail} />
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
  params: {
    idTrx: string;
  };
}
export async function getServerSideProps({ req, params }: getServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;

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
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
