import { Laugh, Paperclip } from "lucide-react";

function InputBox({ message, setMessage, sendMessage }: any) {
  const handleKeyPress = (e: any) => {
    e.key === "Enter" ? sendMessage(e) : null;
  };

  return (
    <div className="flex items-center gap-2 p-3">
      <div className="relative w-full">
        <form className="flex flex-row absolute bottom-0">
          <span className="absolute top-2  bottom-0 cursor-pointer rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
            <Laugh className="text-gray-400 h-5 w-5 mt-1" />
          </span>

          <input
            className=" bg-gray-100 pl-12 shadow-md text-grey-darker py-1.5 rounded-full font-normal text-grey-darkest border border-gray-100  w-full px-2 outline-none text-lg text-gray-600"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder="Type Message Here..."
          />
          <span className="absolute top-2  bottom-0 right-0 cursor-pointer rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
            <Paperclip className="text-gray-400 h-5 w-5 mt-1" />
          </span>
        </form>
      </div>
      <button
        type="button"
        onClick={(e) => sendMessage(e)}
        // disabled={!newMessage || newMessage.length === 0}
        className="
        flex items-center justify-center
        h-9
        w-9
        shadow-md
        select-none
        hover:scale-105 duration-150
        px-2 py-2 text-xs font-medium text-center bg-indigo-600 rounded-full"
      >
        <img src="./send.png" className="" alt="" />
        {/* <Send height={20} className="text-gray-300" /> */}
      </button>
    </div>
  );
}

export default InputBox;
