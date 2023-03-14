import Image from "next/image";
import Link from "next/link";

export default function LogoStore() {
  return (
    <Link className="navbar-brand" href="/">
      <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
    </Link>
  );
}
