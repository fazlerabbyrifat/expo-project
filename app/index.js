import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { icons, images } from "../constants";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from './../components/home/popular/Popularjobs';
import Nearbyjobs from './../components/home/nearby/Nearbyjobs';

export default function Page() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFC]">
      <Stack.Screen
        options={{
          headerStyle: "bg-[#FAFAFC]",
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />),
          headerTitle: ""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 p-4">
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
