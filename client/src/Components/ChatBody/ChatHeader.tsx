import { Camera, Phone } from "lucide-react";

interface Props {
  name: string;
  avatar?: string;
  room: string;
}

function ChatHeader(props: Props) {
  return (
    <div className="bg-gray-200 rounded-xl border-b-gray-200 py-3 px-6 flex flex-row shadow-sm justify-between items-center">
      <div className="flex flex-row items-center space-x-1.5">
        <div className="flex gap-2 items-center">
          <img src="./gamer.png" alt="" className="h-6 w-6" />
          <p className="text-sm font-medium text-gray-400 select-none">
            {props.name}
            {/* {props.room} */}
          </p>
        </div>
      </div>
      <div className="space-x-1">
        <button
          type="button"
          className="hover:bg-gray-300 rounded-full font-medium text-sm p-1.5 text-center inline-flex items-center"
        >
          <Phone className="text-gray-600 hover:text-gray-600 w-4 h-4" />
        </button>
        <button
          type="button"
          className="hover:bg-gray-300 rounded-full font-medium text-sm p-1.5 text-center inline-flex items-center"
        >
          <Camera className="text-gray-600 hover:text-gray-600 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
