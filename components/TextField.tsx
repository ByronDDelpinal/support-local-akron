interface TextFieldProps {
  label: string;
  id: string;
  required: boolean;
  limit?: number;
  type?: string;
}

export function TextField({
  label,
  id,
  required,
  limit,
  type = 'text',
}: TextFieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{`${label} ${required ? '*' : ''}`}</label>
      {type === 'textarea' ? (
        <textarea name={id} id={id} required={required} />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="input100"
          required={required}
          maxLength={limit}
        />
      )}
      <span className="focus-input100" />
    </div>
  );
}
