import { NativeBaseProvider } from "native-base";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
