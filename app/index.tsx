import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-800">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about" className="text-blue-500">
        Go to About
      </Link>
    </View>
  );
}
