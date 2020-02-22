import React from 'react';
import './App.css';
import { loadArticle } from './state/actions/article.action';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Page from './components/Page';
import ErrorPage from './components/ErrorPage';
import Spinner from './components/Spinner';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';

const mainTitle = 'Article Page | ';
let title;

function App(props) {
  props.dispatch(loadArticle());

  if (props.loading) {
    title = mainTitle + 'Loading';
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

function mapStateToProps(state, dispatch) {
  return { loading: state.loading, error: state.error, title: get(state, 'article.title', ''), dispatch };
}

export default connect(mapStateToProps)(App);
