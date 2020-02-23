import React from 'react';
import { connect } from 'react-redux';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography';
import get from 'lodash/get';

function Body(props) {
  const heading = get(props, 'heading', '');
  const innerText = get(props, 'body', [])
    .join(' ')
    .trim();

  // I assume this was sanitized on backend side
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {heading}
      </Typography>
      <Typography component="p" dangerouslySetInnerHTML={{ __html: innerText }}></Typography>
    </CardContent>
  );
}

function mapStateToProps(state) {
  return { heading: get(state, 'article.elements.heading.value'), body: get(state, 'article.elements.body.values') };
}

export default connect(mapStateToProps)(Body);
