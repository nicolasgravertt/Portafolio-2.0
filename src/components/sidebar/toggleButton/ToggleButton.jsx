const ToggleButton = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>X</button>;
};

export default ToggleButton;
