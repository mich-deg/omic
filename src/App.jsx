import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Route, Routes } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import TopBar from "./pages/navbar/TopBar";
import NavSideBar from "./pages/navbar/NavSideBar";
import Dashboard from "./pages/DashboardScreen";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <NavSideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="dashboard" element={<Dashboard />} />
              <Route path="transactions" element={<Transactions />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
