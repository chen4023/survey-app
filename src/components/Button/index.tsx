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
    buttonStyle = 'bg-[#DEDEDE] text-[#3A3A3A] hover:bg-[#F3F3F3]';
  } else {
    buttonStyle = 'bg-[#6542F1] text-white hover:bg-[#9982F4] ';
  }
  return (
    <button className={`${buttonStyle} button-common`} onClick={onClick}>
      {children}
    </button>
  );
}
