import { FC } from "react";
import EmojiPicker from "emoji-picker-react";

interface EmojiPickerProps {
  onSelectEmoji: (emoji: any) => void;
}

const EmojiPickerComponent: FC<EmojiPickerProps> = ({ onSelectEmoji }) => {
  return <EmojiPicker onEmojiClick={onSelectEmoji} />;
};

export default EmojiPickerComponent;
