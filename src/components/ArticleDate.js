import {connect} from 'react-redux';
import get from "lodash/get";

function ArticleDate(props) {
    return new Date(get(props, 'value')).toLocaleDateString();
}

function mapStateToProps(state) {
    if (state.article && state.article.date ) {
        return { ...state.article.date };
    } else {
        return { }
    }

}

export default connect(
    mapStateToProps,
)(ArticleDate);
