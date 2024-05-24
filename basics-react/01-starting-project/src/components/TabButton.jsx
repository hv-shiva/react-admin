function TabButton(props) {
  function handleClick(){
    console.log('hello');
  }
  
    return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}

export default TabButton;
