import SideBar from "@/components/organism/SideBar";
import TransactionContent from "@/components/organism/TransactionContent";
import Head from "next/head";

export default function Transactions() {
  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
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

  return {
    props: {},
  };
}
