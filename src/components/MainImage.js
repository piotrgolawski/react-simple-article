import React from 'react';
import { connect } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import { mediaCardClasses } from '../helpers/card-classes.helper';
import get from 'lodash/get';

function MainImage(props) {
  let URI;
  const classes = mediaCardClasses();

  if (get(props, 'value.leadImage.url')) {
    URI = `https://my12.digitalexperience.ibm.com/${get(props, [
      'value',
      'leadImage',
      'renditions',
      getProperImage(),
      'url',
    ])}`;
  }

  if (URI) {
    return <CardMedia className={classes.media} image={URI} title={get(props, 'value.leadImageCaption.value')} />;
  } else return <span />;
}

function getProperImage() {
  const laptop = window.matchMedia('(max-width: 1024px)').matches;
  const laptopL = window.matchMedia('(max-width: 1440px)').matches;

  let type = 'default';

  if (laptop) {
    type = 'card';
  } else if (laptopL) {
    type = 'lead';
  }

  return type;
}

function mapStateToProps(state) {
  return { ...get(state, 'article.elements.mainImage') };
}

export default connect(mapStateToProps)(MainImage);
