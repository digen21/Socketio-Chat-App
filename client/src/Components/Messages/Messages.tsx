import ChatBody from "Components/ChatBody/ChatBody";

function Messages({ messages, name }: any) {
  return (
    <div>
      {messages.map((message: any, i: number) => (
        <div key={i}>
          <ChatBody messages={message} name={name} />
        </div>
      ))}
    </div>
  );
}

export default Messages;
