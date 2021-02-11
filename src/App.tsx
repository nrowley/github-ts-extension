import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Heading, Flex, Menu } from "@chakra-ui/react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import GitList from "./components/GitList";
import Settings from "./components/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ width: "400px", height: "400px" }}>
        <MenuBar />
        <Box maxW="450px" mx="auto">
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route exact path="" component={GitList} />
          </Switch>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
