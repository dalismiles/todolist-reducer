import "./index.css";

const Input = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <input
      name="task"
      value={value}
      type="text"
      placeholder="type your task here..."
      onChange={handleChange}
    />
  );
};

export default Input;
