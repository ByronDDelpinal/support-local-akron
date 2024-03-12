interface TextFieldProps {
  label: string;
  id: string;
  required: boolean;
  type?: string;
}

export function TextField({
  label,
  id,
  required,
  type = 'text',
}: TextFieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea name={id} id={id} required />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="input100"
          required={required}
        />
      )}
      <span className="focus-input100" />
    </div>
  );
}
