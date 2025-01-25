// Project files
import FormularyField from "../types/InputField";

interface Props {
  item: FormularyField;
}

export default function InputText({ item }: Props) {
  const { id, label, type, required, placeholder } = item;

  return (
    <label className="input input-text">
      <span className="label">{label}</span>
      <input
        type={type}
        name={id}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}
