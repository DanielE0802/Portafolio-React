import { Menú, PortalMenú } from './components/Menú';
import Sections from './components/Sections'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./scss/style.scss"

const darkTheme = createTheme({
  palette: {
    primary: {
      main  :"#1B1C31"
    },
    secondary: {
      main:"#26273B"
    }

  }
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Sections ></Sections>
        <PortalMenú></PortalMenú>
      </ThemeProvider>
    </div>
  );
}

export default App;
