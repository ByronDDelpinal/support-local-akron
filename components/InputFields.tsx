interface TextFieldProps {
  label: string;
  id: string;
  required?: boolean;
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
          pattern={
            type === 'tel'
              ? '^(+d{1,2}s?)?(?d{3})?[s.-]?d{3}[s.-]?d{4}$'
              : undefined
          }
        />
      )}
      <span className="focus-input100" />
    </div>
  );
}

export function StateDropdown({ id }: { id: string }) {
  return (
    <div className="field">
      <label htmlFor={id}>State</label>
      <select name={id} id={id}>
        <option value="">Select a state</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK"> Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <span className="focus-input100" />
    </div>
  );
}
