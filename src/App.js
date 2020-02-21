import React from 'react';
import './App.css';
import {addArticle, setError} from './state/actions/article.action';
import {connect, useDispatch} from 'react-redux';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Page from './components/Page';
import ErrorPage from './components/ErrorPage';
import Spinner from './components/Spinner';
import get from "lodash/get";
import {Helmet} from "react-helmet";

const mainTitle = 'Article Page | ';
let title;

function App(props) {
  fetchData(useDispatch());

    if (props.loading) {
        title = mainTitle + 'Loading'
        return loadingView();
    }

  if (props.error) {
      title = mainTitle + 'Error';
    return errorView(props.error);
  }

  title = mainTitle + props.title;

  return defaultView();
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function errorView(error) {
  return template(<ErrorPage error={error} />);
}

function loadingView() {
  return template(<Spinner />);
}

function defaultView() {
  return template(<Page />);
}

function template(component) {
  return (
    <ThemeProvider theme={theme}>
        <Helmet>
            <title>{title}</title>
        </Helmet>
      <CssBaseline />
      <div className="App">{component}</div>
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
    return {loading: state.loading, error: state.error, title: get(state, 'article.title', '')};
}

function fetchData(dispatch) {
    fetch(
        'https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content' +
        '/fa9519d5-0363-4b8d-8e1f-627d802c08a8'
    )
        .then(res => res.json())
        .then(json => {
            dispatch(addArticle({elements : json.elements, title: json.name}));
        })
        .catch(error => {
            dispatch(setError(error));
        });
}

export default connect(mapStateToProps)(App);
