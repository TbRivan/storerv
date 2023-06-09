export interface InputProps {
  label: string;
  value: string;
  disabled?: boolean;
  onChange?: (event: any) => void;
}

export default function Input(props: InputProps) {
  const { label, value, disabled, onChange } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder="Enter your name"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
}
