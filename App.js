import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Icon,
  Image,
  FlatList,
  Pressable,
  Spacer,
} from "native-base";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// Extend the theme
export const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: "#ffe4e6",
      100: "#fecdd3",
      200: "#fda4af",
      300: "#fb7185",
      400: "#f43f5e",
      500: "#e11d48",
      600: "#be123c",
      700: "#9f1239",
      800: "#881337",
      900: "#4c0519",
    },
  },
});

const songs = [
  { id: 1, title: "Back To December", artist: "Taylor Swift", cover: "https://i.scdn.co/image/ab67616d0000b273904445d70d04eb24d6bb79ac" },
  { id: 2, title: "Meant It", artist: "Lauv, LANY", cover: "https://i.scdn.co/image/ab67616d0000b2738c6baef6af72030dd5f62456" },
  { id: 3, title: "Daylight", artist: "Taylor Swift", cover: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" },
  { id: 4, title: "Fix You", artist: "Coldplay", cover: "https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651" },
];

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: "primary.900" }}
        _light={{ bg: "primary.50" }}
        px={4}
        flex={1}
        safeArea
      >
        <VStack space={4} flex={1} width="100%">
          <Heading size="xl" color="primary.600" mt={5} textAlign="center">
            Kay Music 
          </Heading>
          <Box alignItems="center" mt={4}>
            <Image
              source={{ uri: "https://img.pikbest.com/origin/09/17/49/726pIkbEsTvtD.png!sw800" }}
              alt="Featured Album"
              borderRadius="lg"
              width="90%"
              height={150}
              mb={4}
            />
          </Box>
          <Heading size="md" color="primary.500" textAlign="center" mb={2}>
            Trending Songs
          </Heading>
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <Pressable>
                <HStack
                  space={3}
                  alignItems="center"
                  p={3}
                  borderBottomWidth={1}
                  borderColor="primary.200"
                >
                  <Image
                    source={{ uri: item.cover }}
                    alt="Cover"
                    size="md"
                    borderRadius="md"
                  />
                  <VStack flex={1}>
                    <Text fontSize="lg" color="primary.700" isTruncated>
                      {item.title}
                    </Text>
                    <Text fontSize="sm" color="primary.500" isTruncated>
                      {item.artist}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Icon name="chevron-forward" size="sm" color="primary.500" />
                </HStack>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
            width="100%"
          />
          <Box position="absolute" bottom={4} width="100%" alignItems="center">
            <ToggleDarkMode />
          </Box>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      borderWidth={1}
      borderColor="primary.300"
      borderRadius="lg"
      p={3}
      _dark={{ bg: "primary.800" }}
      _light={{ bg: "primary.100" }}
      width="90%"
      alignItems="center"
    >
      <HStack space={4} alignItems="center" justifyContent="space-between" width="100%">
        <Text fontSize="md" color="primary.600">Dark Mode</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
          offTrackColor="primary.300"
          onTrackColor="primary.600"
        />
        <Text fontSize="md" color="primary.600">Light Mode</Text>
      </HStack>
    </Box>
  );
}

// Placeholder NativeBaseIcon component
function NativeBaseIcon() {
  return (
    <Icon
      name="heart"
      size="3xl"
      color="primary.500"
      _dark={{ color: "primary.200" }}
      _light={{ color: "primary.800" }}
    />
  );
}
