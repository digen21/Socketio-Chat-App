interface Messages {
  name: string;
  sentAt: string | any;
  text: string | string[];
  room: string;
  prompt: string;
}

interface Props {
  messages: Messages[] | any;
  name: string;
}

function ChatBody({ messages: { text, user, sentAt, prompt }, name }: Props) {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="px-6 py-1">
      <div className="m-1">
        <span>{prompt}</span>
      </div>
      <div
        className={`py-2 flex flex-row w-full  overflow-auto ${
          isSentByCurrentUser ? "justify-end" : "justify-start"
        }`}
      >
        <div className={`${isSentByCurrentUser ? "order-2" : "order-1"}`}>
          <img src="./gamer.png" alt="" className="h-6 w-6" />
        </div>
        <div
          className={`px-2 w-fit md:py-3 xs:py-1 flex flex-col bg-indigo-500 text-white ${
            isSentByCurrentUser
              ? "order-1 mr-2  rounded-tl-2xl rounded-b-2xl rounded-tr-1"
              : "order-2 ml-2  rounded-tl-1 rounded-b-2xl rounded-tr-2xl"
          }`}
        >
          <span className="xs:text-[8px] md:text-[8px] text-gray-200">
            {name}&nbsp;-&nbsp;
            {sentAt}
          </span>
          <span className="md:text-[15px] xs:text-[10px]">{text}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="px-6 py-1 overflow-auto">
      <div className="m-1">
        <span>{prompt}</span>
      </div>
      <div
        className={`py-2 flex flex-row w-full  overflow-auto ${
          isSentByCurrentUser ? "justify-end" : "justify-start"
        }`}
      >
        <div className={`${isSentByCurrentUser ? "order-2" : "order-1"}`}>
          <img src="./gamer.png" alt="" className="h-6 w-6" />
        </div>
        <div
          className={`px-2 w-fit md:py-3 xs:py-1 flex flex-col bg-indigo-500 text-white ${
            isSentByCurrentUser
              ? "order-1 mr-2  rounded-tl-2xl rounded-b-2xl rounded-tr-1"
              : "order-2 ml-2  rounded-tl-1 rounded-b-2xl rounded-tr-2xl"
          }`}
        >
          <span className="xs:text-[8px] md:text-[8px] text-gray-200">
            {user}&nbsp;-&nbsp;
            {sentAt}
          </span>
          <span className="md:text-[15px] xs:text-[10px]">{text}</span>
        </div>
      </div>
    </div>
  );

  //return {
}

export default ChatBody;

{
  /* 
<div className="max-h-96 h-96 xs:px-6 md:px-10 py-1 overflow-auto">
  {messages.map((message: string, index: number) => (
          <div
            key={index}
            className={`py-2 flex flex-row w-full ${
              message.isChatOwner ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`${message.isChatOwner ? "order-2" : "order-1"}`}>
              <img src="./gamer.png" alt="" className="h-6 w-6" />
            </div>
            <div
              className={`px-2 w-fit md:py-3 xs:py-1 flex flex-col bg-indigo-500 text-white ${
                message.isChatOwner
                  ? "order-1 mr-2  rounded-tl-2xl rounded-b-2xl rounded-tr-1"
                  : "order-2 ml-2  rounded-tl-1 rounded-b-2xl rounded-tr-2xl"
              }`}
            >
              <span className="xs:text-[8px] md:text-[8px] text-gray-200">
                {message.sentBy}&nbsp;-&nbsp;
                {new Date(message.sentAt).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="md:text-[15px] xs:text-[10px]">
                {message.text}
              </span>
            </div>
          </div>
        ))} 
</div>;
*/
}
