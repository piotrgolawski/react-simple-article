import React, {useState} from "react";
import "./App.css";
import { addArticle } from "./state/actions/basic";
import { mapJson } from "./helpers/json-mapper";
import { connect } from "react-redux";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Page from "./components/Page";
import ErrorPage from "./components/ErrorPage";
import Spinner from "./components/Spinner";

function App({ dispatch }) {
    // TODO errorpage, loader
    const [state, setState] = useState({loading: true});

    fetch(
        "https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content" +
        "/fa9519d5-0363-4b8d-8e1f-627d802c08a8"
    )
        .then(res => res.json())
        .then(json => dispatch(addArticle(mapJson(json).elements)))
        .catch((error) => setState({error}))
        .finally(() => setState({loading: false}));

    const theme = createMuiTheme({
        palette: {
            type: "dark"
        }
    });

    if(state.loading) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Spinner/>
                </div>
            </ThemeProvider>
        )
    }

    if(state.error) {
        return  (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
            <ErrorPage error={state.error}/>
            </div>
        </ThemeProvider>);
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Page />
      </div>
    </ThemeProvider>
  );
}

export default connect()(App);
