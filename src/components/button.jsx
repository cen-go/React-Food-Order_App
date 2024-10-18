function Button({ buttonStyle, title, ...props }) {
  return (
    <button className={buttonStyle} {...props}>
      {title}
    </button>
  );
}

export default Button;
