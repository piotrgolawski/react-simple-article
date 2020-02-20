import React from 'react';
import {connect} from 'react-redux';
import Author from "./Author";
import Date from "./ArticleDate";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {avatarCardClasses} from "../helpers/card-classes.helper";

function Heading(props) {
    const classes = avatarCardClasses();

    const getInitials = (name) => {
        if (!name) {
            return '';
        }
        return name.split(' ').map(part => part.charAt(0)).join('');
    };

    return (
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {getInitials(props.value)}
                </Avatar>
            }
            title={<Author/>}
            subheader={<Date/>}
        >

        </CardHeader>
    );
}

function mapStateToProps(state) {
    if (state.article && state.article.author) {
        return {...state.article.author};
    } else {
        return {}
    }

}

export default connect(
    mapStateToProps,
)(Heading);
