import {connect} from 'react-redux';
import get from "lodash/get";

function Author(props) {
    return get(props, 'value', '');
}

function mapStateToProps(state) {
    if (state.article && state.article.author ) {
        return { ...state.article.author };
    } else {
        return { }
    }

}

export default connect(
    mapStateToProps,
)(Author);
