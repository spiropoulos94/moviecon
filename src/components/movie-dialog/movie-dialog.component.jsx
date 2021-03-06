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
import {useQuery} from "react-query";

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
        backgroundColor:"#b8cdf8",
        maxHeight:"85vh",
        '@media (max-width:320px)': {
            maxHeight:"99vh",
            width:"100%",
            // maxHeight:"100%"
        },
        '@media (max-width:450px)': {
            maxHeight: "95vh",
            margin:10

    },
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle  className={classes.root} {...other}>
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


    const fetchMovieDetails = async (movieID) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=bc50218d91157b1ba4f142ef7baaa6a0&append_to_response=videos,images,similar,reviews`)
        const data = await res.json()
        return data
    }

    const { data:movieDetails, error, isLoading } = useQuery(`movieDetails_for_${movie.title}`, fetchMovieDetails)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MovieCard key={`${movie.id} ${movie.id}`} movie={movie} movieDetails={movieDetails} onClick={handleClickOpen} />

            <Dialog classes={{ paper: classes.dialogPaper }} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="lg" >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {movie.title}
                    {movie.release_date && <>({`${movie.release_date.substring(0, 4)}`})</>}

                </DialogTitle>
                <DialogContent dividers>
                    {movieDetails && (<MovieExpanded movie={movie} movieDetails={movieDetails} />)}
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