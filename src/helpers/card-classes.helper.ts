import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const rootCardClasses = makeStyles(theme => ({
  root: {
    maxWidth: '45%',
  },
}));

export const errorRootCardClasses = makeStyles(theme => ({
  errorRoot: {
    width: '45%',
  },
}));

export const mediaCardClasses = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export const avatarCardClasses = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500],
  },
}));
