import { Box, Heading } from "@chakra-ui/react";
import { Link, Route, Switch } from "react-router-dom";
import ColorMode from "./components/ColorMode";
import GitList from "./components/GitList";
import Settings from "./components/Settings";

//import React from "react";
function App() {
  return (
    <div className="App" style={{ width: "400px", height: "400px" }}>
      <ColorMode align={"end"} />

      <Box maxW="400px" mx="auto">
        <Heading size="sm" max="400px" mx="auto" textAlign="center">
          <Link to="/test">github-extension</Link>
        </Heading>
        <Switch>
          <Route path="/" component={GitList} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Box>
    </div>
  );
}

export default App;
