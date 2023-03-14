import Link from "next/link";

interface ListProps {
  href?: string;
  desc: string;
}

export default function List(props: Partial<ListProps>) {
  const { href = "/", desc } = props;
  return (
    <li className="mb-6">
      <Link
        href={href}
        className="text-lg color-palette-1 text-decoration-none"
      >
        {desc}
      </Link>
    </li>
  );
}
