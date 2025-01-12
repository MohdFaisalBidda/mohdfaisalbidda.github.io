import "./App.css";
import { TabProvider } from "./providers/TabProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import Layout from "./Components/Layout";

function App() {
  return (
    <ThemeProvider>
      <TabProvider>
        <Layout />
      </TabProvider>
    </ThemeProvider>
  );
}

export default App;
