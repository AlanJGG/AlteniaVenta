export const Btn3 = ({ title, onClick, classes }) => {
  return (
    <button type="button" className={`btn3 ${classes}`} onClick={onClick}>
      {title}
    </button>
  );
};
