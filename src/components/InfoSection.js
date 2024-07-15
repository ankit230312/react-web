import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import sideImage from '../assets/images/logo.gif'; // Update the path as needed

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '50%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  textContainer: {
    width: '50%',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const InfoSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={sideImage} alt="Side" className={classes.image} />
      <Box className={classes.textContainer}>
        <Typography variant="h4" gutterBottom>
          Heading
        </Typography>
        <Typography variant="body1">
          This is the information section. Here you can add any text or content
          that provides information alongside the image. Adjust the text content as needed.
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoSection;
