import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { errorRootCardClasses, mediaCardClasses } from '../helpers/card-classes.helper';
import Card from '@material-ui/core/Card';
import stpo from '../images/stpo.jpg';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';

function ErrorPage(props) {
  const error = get(props, 'error', '').toString();
  const errorClasses = errorRootCardClasses();
  const mediaClasses = mediaCardClasses();

  return (
    <Card className={errorClasses.errorRoot}>
      <CardHeader title={error} />
      <CardMedia className={mediaClasses.media} image={stpo} />
    </Card>
  );
}

export default connect()(ErrorPage);
