import Image from "next/image";

export interface StepItemProps {
  card: 0 | 1 | 2;
}

export default function StepItem(props: StepItemProps) {
  const { card } = props;
  const step = [
    {
      icon: "step1",
      title: "1.Start",
      desc1: "Pilih salah satu game",
      desc2: "yang ingin kamu top up",
    },
    {
      icon: "step2",
      title: "2. Fill Up",
      desc1: "Top up sesuai dengan",
      desc2: "nominal yang sudah tersedia",
    },
    {
      icon: "step3",
      title: "3. Be a Winner",
      desc1: "Siap digunakan untuk",
      desc2: "improve permainan kamu",
    },
  ];
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image
          src={`/icon/${step[card].icon}.svg`}
          width={80}
          height={80}
          alt="icon step"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">
          {step[card].title}
        </p>
        <p className="text-lg color-palette-1 mb-0">
          {step[card].desc1}
          <br />
          {step[card].desc2}
        </p>
      </div>
    </div>
  );
}
