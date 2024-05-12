import Down from "../assets/Down.svg";

interface P_DownButtonProps {
  text: string;
  onClick: () => void;
}

const P_DownButton: React.FC<P_DownButtonProps> = ({ text, onClick }) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleButtonClick}
        className="font-bold py-2 px-4 rounded-xl inline-flex items-center bg-[#DAEBE5]"
      >
        <img src={Down} alt="Down Icon" className="pr-2" />
        <p className="text-sm">앨범 생성</p>
      </button>
    </div>
  );
};

export default P_DownButton;
