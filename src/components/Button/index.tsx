export default function Button({
  children,
  type,
  onClick,
}: {
  children: string;
  type: string;
  onClick: () => void;
}) {
  let buttonStyle;
  if (type === 'prev') {
    buttonStyle = 'secondary-btn';
  } else {
    buttonStyle = 'primary-btn';
  }
  return (
    <button className={`${buttonStyle} button-common`} onClick={onClick}>
      {children}
    </button>
  );
}
