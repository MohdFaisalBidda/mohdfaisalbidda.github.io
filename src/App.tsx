import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { TabContext, TabProvider, useTab } from "./providers/TabProvider";
import {
  ThemeContext,
  ThemeProvider,
  useTheme,
} from "./providers/ThemeProvider";
import Layout from "./Components/Layout";
// import Experience from "./Components/Experience";

function App() {
  return (
    <ThemeProvider>
      <TabProvider>
        <Layout/>
      </TabProvider>
    </ThemeProvider>
  );
}

export default App;
