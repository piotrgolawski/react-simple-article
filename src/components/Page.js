import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { rootCardClasses } from '../helpers/card-classes.helper';
import Heading from './Heading';
import MainImage from './MainImage';
import Body from './Body';

function Page() {
  const classes = rootCardClasses();

  return (
    <Card className={classes.root}>
      <Heading />
      <MainImage />
      <Body />
    </Card>
  );
}

export default connect()(Page);
