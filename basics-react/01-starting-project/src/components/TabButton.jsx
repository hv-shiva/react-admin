function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTION Component Rendered');

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
