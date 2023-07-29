import EmojiPickerComponent from "Components/EmojiPicker/EmojiPicker";
import { Laugh, Paperclip } from "lucide-react";
import { useState } from "react";

function MessageInput({ message, setMessage, sendMessage }: any) {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const handleKeyPress = (e: any) => {
    e.key === "Enter" ? sendMessage(e) : null;
  };

  const handleEmojiClick = (emoji: any) => {
    setSelectedEmoji(emoji.emoji);
    setMessage((prev: any) => prev + emoji.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 left-5 z-50">
          {showEmojiPicker && (
            <EmojiPickerComponent onSelectEmoji={handleEmojiClick} />
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 p-3">
        <div className="relative w-full">
          <form className="flex flex-row relative">
            <span
              onClick={() => setShowEmojiPicker(true)}
              className="absolute hover:scale-105 duration-150 top-2  bottom-0 cursor-pointer rounded rounded-r-none border-0 px-3 font-bold text-grey-100"
            >
              <Laugh className="text-gray-400 h-5 w-5 mt-1" />
            </span>

            <input
              className=" bg-gray-100 pl-12 shadow-md text-grey-darker py-1.5 rounded-full font-normal text-grey-darkest border border-gray-100  w-full px-2 outline-none text-lg text-gray-600"
              type="text"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              // onChange={(e) => setMessage(e.target.value)}
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
          className="
        flex items-center justify-center h-9 w-9 shadow-md select-none hover:scale-105 duration-150
        px-2 py-2 text-xs font-medium text-center bg-indigo-600 rounded-full"
        >
          <img src="./send.png" className="" alt="" />
          {/* <Send height={20} className="text-gray-300" /> */}
        </button>
      </div>
    </>
  );
}

export default MessageInput;
