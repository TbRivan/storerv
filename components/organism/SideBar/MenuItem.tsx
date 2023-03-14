import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  active?: boolean;
  href?: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, active, href = "/member" } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classItem}>
      <Image
        src={`/icon/ic-menu-${title}.svg`}
        width={25}
        height={25}
        alt="icon"
        className="me-3"
      />
      <p className="item-title m-0">
        <Link href={`${href}`} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
