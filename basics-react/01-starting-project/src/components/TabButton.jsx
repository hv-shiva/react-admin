function TabButton({ children, onSelect }) {
  console.log('TABBUTTION Component Rendered');

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
