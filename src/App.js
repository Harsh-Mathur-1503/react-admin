import {ColourModeContext , useMode} from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
function App() {
  const [theme,colorMode]=useMode();
  return (
    <ColourModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar />
        </main>
      </div>
      </ThemeProvider>   
    </ColourModeContext.Provider>
    
  );
}

export default App;
