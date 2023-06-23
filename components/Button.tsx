import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
  color: "light-gray" | "dark-gray" | "orange";
}

export default function Button({ onPress, title, color }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex h-20 w-20 items-center justify-center rounded-full bg-${color}`}
    >
      <Text
        className={`font-sans text-4xl text-${
          color === "light-gray" ? "black" : "white"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
