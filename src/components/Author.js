import { connect } from 'react-redux';
import get from 'lodash/get';

function Author(props) {
  return get(props, 'value', '');
}

function mapStateToProps(state) {
    return {... get(state, 'article.elements.author')};
}

export default connect(mapStateToProps)(Author);
