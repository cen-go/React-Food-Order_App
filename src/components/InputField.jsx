function InputField({ title, id, ...props}) {
  return (
    <div className="control">
      <label htmlFor={id}>{title}</label>
      <input id={id} {...props} />
    </div>
  )
}

export default InputField;