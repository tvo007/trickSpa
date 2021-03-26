import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';
import PageHeading from '../../components/PageHeading';
import {makeStyles} from '@material-ui/core/styles';
/**
 * test
 */

const useStyles = makeStyles (theme => ({
  root: {
    marginTop: '-3rem',
  },
  mainCard: {
    paddingTop: '2rem',
    textAlign: 'center',
  },
  card: {
    marginBottom: '1rem',
  },
  divider: {
    background: 'black',
  },
  subheader: {
    marginTop: '1rem',
  },
  list: {
    '& > *': {
      margin: '1rem 0',
    },
  },
  avatar: {
    position: 'relative',
    top: '2rem',
    backgroundColor: theme.palette.primary.light,
    height: '4rem',
    margin: 'auto',
    width: '4rem',
    zIndex: '10',
  },
}));

// HEADING: Avatar + Username + short bio
// BODY: User's posts or their favorite posts by others, maybe links to their samplers

const MyProfileView = ({myProfile, profileLoading, profileError}) => {
  /**
   * 
   */

  const classes = useStyles ();
  return (
    <Grid className={classes.root} container item spacing={2} xs={12}>
      {myProfile === null || profileLoading
        ? <Typography>Loading!</Typography>
        : <Fragment>
            <Grid item xs={12}>
              <Avatar className={classes.avatar}>
                {myProfile
                  ? `${myProfile.first_name[0]}${myProfile.last_name[0]}`
                  : null}
              </Avatar>
              <Card className={classes.mainCard}>
                <CardHeader
                  subheader={
                    <Typography className={classes.subheader}>
                      {myProfile ? myProfile.bio : null}
                    </Typography>
                  }
                  title={
                    <PageHeading
                      title={
                        myProfile
                          ? `${myProfile.first_name} ${myProfile.last_name}`
                          : null
                      }
                    />
                  }
                />
                <CardContent>
                  <Typography variant="body1">
                    TRICKING ALIAS
                  </Typography>
                  <Typography variant="body1">
                    LOCATION
                  </Typography>
                  <Typography variant="body1">
                    Date of User Creation
                  </Typography>
                  <Typography variant="body1">
                    Insta
                  </Typography>
                  <Typography variant="body1">
                    Twitter
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card className={classes.card}>
                <CardHeader
                  title={<Typography variant="h4">Orgs</Typography>}
                />
                <Divider />
                <CardContent className={classes.list}>
                  <Typography>Mapped Tricking Orgs</Typography>
                  <Typography>Some Tricking Org</Typography>
                  <Typography>Some organization</Typography>
                  <Typography>Some organization</Typography>
                  <Typography>Some organization</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader
                  title={<Typography variant="h4">Past Gatherings</Typography>}
                />
                <Divider />
                <CardContent className={classes.list}>
                  <Typography>Mapped Past Gatherings</Typography>
                  <Typography>Some other thing</Typography>
                  <Typography>Some other thing</Typography>
                  <Typography>Some other thing</Typography>
                  <Typography>Some other thing</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid container item sm={8}>
              <Card className={classes.card}>
                <CardHeader
                  title={<Typography variant="h4">Stickied Sampler</Typography>}
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                    velit odit sunt provident maiores, perferendis aliquam minus fugit
                    similique tempora animi consequatur ducimus repellendus architecto
                    molestias corporis officia consectetur! Odit! Nemo dolore
                    architecto eum eos fugiat ea aperiam impedit incidunt quae, harum
                    officiis praesentium neque exercitationem, earum quibusdam, iusto
                    adipisci eaque! Earum fugit nostrum officiis? Sequi doloribus enim
                    placeat velit.
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardHeader
                  title={<Typography variant="h4">Recent Posts</Typography>}
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                    velit odit sunt provident maiores, perferendis aliquam minus fugit
                    similique tempora animi consequatur ducimus repellendus architecto
                    molestias corporis officia consectetur! Odit! Nemo dolore
                    architecto eum eos fugiat ea aperiam impedit incidunt quae, harum
                    officiis praesentium neque exercitationem, earum quibusdam, iusto
                    adipisci eaque! Earum fugit nostrum officiis? Sequi doloribus enim
                    placeat velit.
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardHeader
                  title={<Typography variant="h4">Some post</Typography>}
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                    velit odit sunt provident maiores, perferendis aliquam minus fugit
                    similique tempora animi consequatur ducimus repellendus architecto
                    molestias corporis officia consectetur! Odit! Nemo dolore
                    architecto eum eos fugiat ea aperiam impedit incidunt quae, harum
                    officiis praesentium neque exercitationem, earum quibusdam, iusto
                    adipisci eaque! Earum fugit nostrum officiis? Sequi doloribus enim
                    placeat velit.
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          </Fragment>}
    </Grid>
  );
};

// MyProfileView.propTypes = {};

export default MyProfileView;
