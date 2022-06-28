import { StatusBar } from "expo-status-bar";
import { GlobalStorage } from "./src/context/GlobalContext";
import MainRouter from "./src/routes/MainRouter";

export default function App() {
  return (
    <GlobalStorage>
      <StatusBar style="auto" />
      <MainRouter />
    </GlobalStorage>
  );
}
