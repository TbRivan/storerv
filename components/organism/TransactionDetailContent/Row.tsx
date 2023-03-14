import cx from "classnames";

interface RowProps {
  label: string;
  value: string | number;
  isTotal?: boolean;
}

export default function Row(props: Partial<RowProps>) {
  const { label, value, isTotal } = props;
  const textClass = cx({
    "purchase-details": true,
    "color-palette-4": isTotal,
  });

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={textClass}>{value}</span>
    </p>
  );
}
