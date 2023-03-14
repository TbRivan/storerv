import cx from "classnames";
import Link from "next/link";

interface ButtonTabProps {
  title: string;
  active?: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props;
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <Link data-filter="*" href="#" className={btnClass}>
      {title}
    </Link>
  );
}
