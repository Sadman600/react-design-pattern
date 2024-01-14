const CustomInput = ({ styles }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        style={{
          border: styles.border,
          borderRadius: styles.borderRadius,
        }}
      />
    </div>
  );
};

export default CustomInput;
