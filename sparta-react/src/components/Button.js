//Button 컴포넌트
function Button(props) {
  const { color, onClick, children } = props;
  if (color)
    return (
      <button style={{ background: color, color: "white" }} onClick={onClick}>
        {children}
      </button>
    );
  return <button onClick={onClick}>{props.children}</button>;
}

export default Button;