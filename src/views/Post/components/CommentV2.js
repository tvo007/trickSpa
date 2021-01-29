import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions,
  CardActionArea,
  Avatar,
} from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  profile: {},
  subheader: {
    // backgroundColor: theme.palette.primary.light,
    height: theme.spacing (1),
  },
  subheaderText: {
    color: theme.palette.text.subtitle,
  },
  // avatarContainer: {
  //   marginLeft: theme.spacing(2)
  // },
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
}));

const Comment = ({body, author, postTitle}) => {
  const classes = useStyles ();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      spacing={1}
    >

      <Grid
        container
        item
        justify="center"
        xs={1}
      >
        <Avatar
          className={classes.avatar}
          variant="circle"
        >TV</Avatar>
      </Grid>

      <Grid
        item
        xs={11}
      >

        <Card>
          <CardHeader
            className={classes.subheader}
            subheader={
              <Grid
                alignItems="center"
                container
                direction="row"
              >

                <Typography
                  className={classes.subheaderText}
                  variant="body2"
                >
                  Posted by {author} @ time
                </Typography>
              </Grid>
            }
          />
          <Divider />
          <Grid container>

            <Grid item>

              <CardContent>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sed. Perspiciatis unde adipisci, voluptates autem, architecto eaque quibusdam dolores nesciunt laboriosam ab blanditiis aliquid sed debitis, ullam totam. Optio, ab!Enim quas quos nesciunt laboriosam vero doloribus fugiat blanditiis tenetur at eligendi in a esse aperiam vel, similique dignissimos, repudiandae error minus asperiores placeat maxime illum, dolor provident? Id, nostrum?</Typography>
              </CardContent>
            </Grid>
            {/* <Divider orientation="vertical" flexItem /> */}
            {/* <Grid item xs={1}>
          <CardContent className={classes.profile}>
            <Typography noWrap={true}>PROFILE CONTENT</Typography>
            <Typography noWrap={true}>SHOULD HIDE WHEN MINIMAL</Typography>
          </CardContent>
        </Grid> */}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

Comment.propTypes = {};

export default Comment;