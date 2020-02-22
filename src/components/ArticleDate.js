import { connect } from 'react-redux';
import get from 'lodash/get';

function ArticleDate(props) {
  return new Date(get(props, 'value')).toLocaleDateString();
}

function mapStateToProps(state) {
  return { ...get(state, 'article.elements.date') };
}

export default connect(mapStateToProps)(ArticleDate);
