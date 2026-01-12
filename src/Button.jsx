function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.texto}</button>
  )
}

export default Button
