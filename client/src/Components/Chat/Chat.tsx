import { useEffect, useState } from "react";
import moment from "moment";
import queryString from "query-string";
import { Socket, io } from "socket.io-client";
import ChatHeader from "Components/ChatBody/ChatHeader";
import MessageInput from "Components/MessageInput/MessageInput";
import Messages from "Components/Messages/Messages";

let socket: Socket;

function Chat() {
  const [name, setName] = useState<any>("");
  const [users, setUsers] = useState("");
  const [room, setRoom] = useState<any>("");
  const [message, setMessage] = useState<string[] | any>([]);
  const [messages, setMessages] = useState<string[] | any>([]);

  const date = Date.now();
  const sentAt = moment(date).format("hh:mm A");

  const ENDPOINT = "https://gossip-react-chat-app.onrender.com";

  useEffect(() => {
    const { room, name } = queryString.parse(location?.search);
    socket = io(ENDPOINT, { transports: ["websocket"] });

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location?.search]);

  //For Handling Messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  });

  //send Message function
  const sendMessage = (e: any) => {
    e.preventDefault();
    if (message) {
      const response = {
        message,
        sentAt,
      };
      socket.emit("sendMessage", response, () => setMessage(""));
    }
  };

  return (
    <div className="">
      <div className="p-20 lg:w-screen bg-gray-300 h-screen">
        <div className=" shadow-sm border rounded-xl">
          <ChatHeader name={name} room={room} />
          <Messages messages={messages} name={name} />
          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
