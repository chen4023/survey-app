export default function TextInput() {
  return (
    <div className="flex-center">
      <input
        type="text"
        className="ml-[28px] w-full rounded-[5px] border border-[#E0E0E0] px-[18px] py-[12px] text-lg"
        placeholder="10자 이내로 단답해주세요."
      ></input>
    </div>
  );
}
