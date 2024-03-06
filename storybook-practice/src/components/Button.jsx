const Button = ({ label, children, handleOnChange }) => {
  return (
    <button
      label={label}
      style={{
        background: "green",
        color: "white",
        padding: "10px 20px ",
        outline: 0,
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={handleOnChange}
    >
      {children}
    </button>
  );
};

export { Button };
