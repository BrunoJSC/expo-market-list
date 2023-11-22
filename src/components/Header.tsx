import { Image, VStack } from "native-base";

export function Header() {
  return (
    <VStack>
      <VStack width="100%" height="128px">
        <Image source={require("../assets/logo.png")} alt="logo" width="100%" />
      </VStack>
    </VStack>
  );
}
