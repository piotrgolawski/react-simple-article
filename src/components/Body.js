import React from 'react';
import {connect} from 'react-redux';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography";
import get from "lodash/get";

function Body(props) {
    const innerText = get(props, 'values', []).join(' ').trim();

    // TODO I assume this was sanitized on backend side
    return (
        <CardContent>
            <Typography component="p" dangerouslySetInnerHTML={{__html: innerText}}>
            </Typography>
        </CardContent>
    );
}

function mapStateToProps(state) {
    if (state.article && state.article.body) {
        return {...state.article.body};
    } else {
        return {}
    }

}

export default connect(
    mapStateToProps,
)(Body);
