import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
}));

const Spinner = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.root} mt-5`}>
            <CircularProgress className="mx-auto" />
        </div>
    );
};

export default Spinner;
