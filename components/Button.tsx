import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
  backgroundColor: "bg-light-gray" | "bg-dark-gray" | "bg-orange";
  additionalClasses?: string;
}

export default function Button({
  onPress,
  title,
  backgroundColor,
  additionalClasses
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex h-20 w-20 items-center justify-center self-center justify-self-center rounded-full ${backgroundColor} ${additionalClasses}`}
    >
      <Text
        className={`font-sans text-4xl ${
          backgroundColor === "bg-light-gray" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
