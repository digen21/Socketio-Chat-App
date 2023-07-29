import ChatBody from "Components/ChatBody/ChatBody";

function Messages({ messages, name }: any) {
  return (
    <div className="overflow-auto max-h-[400px] h-[400px]">
      {messages.map((message: any, i: number) => (
        <div key={i}>
          <ChatBody messages={message} name={name} />
        </div>
      ))}
    </div>
  );
}

export default Messages;
