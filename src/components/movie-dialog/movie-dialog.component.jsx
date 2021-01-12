import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MovieCard from "../movie-card/movie-card.component";
import MovieExpanded from "../movie-expanded/movie-expanded.component";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        '@media (max-width:380px)': {
            padding:theme.spacing(1)
        }
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    dialogPaper: {
        height:"80vh",
        '@media (max-width:380px)': {
            width:"100%"
        }
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const  MovieDialog = ({movie, classes}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MovieCard movie={movie} onClick={handleClickOpen} />

            <Dialog classes={{ paper: classes.dialogPaper }} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="lg" >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {movie.title}
                    ({`${movie.release_date.substring(0, 4)}`})

                </DialogTitle>
                <DialogContent dividers>
                    <MovieExpanded movie={movie} />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(MovieDialog);