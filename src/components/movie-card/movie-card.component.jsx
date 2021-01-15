import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import "./movie-card.styles.scss";
import RelatedMovies from "../related-movies/related-movies.component";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        '@media (max-width:768px)': {
            maxWidth: "350px"
        },
        '@media (max-width:450px)': {
            height: "75vh"
        },
        '@media (max-width:375px)': {
            height: '75vh',
            maxHeight:'none',
            padding:0,
        },
        maxWidth: 420,
        height: 620,
        overflow: 'auto',
        width: '100%',
        border: "5px solid #064789",
        backgroundColor: 'white',
        padding:"0",
        '@media (max-width:320px)': {
            border: '2px solid #064789',
            padding:"0",
        },
        position: 'relative',
        transform: "translateZ(0)",
        transition: "transform 0.25s ease-out",
        '&:hover': {
            cursor: "pointer",
            transform: "scale(1.05)"
        }
    },
    genres: {
        fontSize: '1rem',
        margin:'auto',
        '@media (max-width:320px)': {
            fontSize: '0.7rem',
        },
        '@media (max-width:390px)': {
            fontSize: '0.8rem',
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    title:{
        '@media (max-width:375px)': {
            padding: '2px 0 0 10px ',
        }
    },
    media: {
        height: "73%",
        // paddingTop: '56.25%', // 16:9
        '@media (max-width:420px)': {
            height: '62%',
        },
        '@media (max-width:320px)': {
            height: '42%',
        }

    },
    cardImage:{
        width:"100%",
        height:"60%"
    },
    truncate: {
        textOverflow: "ellipsis",
        display: "-webkit-box",
        lineClamp: 2,
        boxOrient: "vertical",
        overflow: "hidden",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        color: "white",
        background: "#064789",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
   cardActions:{
     position:"absolute",
       bottom:0,
       left:0,
       right:0
   },
    expandOpen: {
        transform: 'rotate(180deg)',
        display: 'none'
    }
}));

const MovieCard = ({movie, onClick, movieDetails}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [truncate, setTruncate] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setTruncate(!truncate);
    };

    const addDefaultSrc = (e) =>{
        e.target.src = 'https://media.istockphoto.com/photos/no-image-available-picture-id531302789'
    }

    return (
        <>
            {movie && movieDetails && <div onClick={onClick} className="movie-card">
                <Card className={classes.root} raised>
                    {/*<CardMedia*/}
                    {/*    className={classes.media}*/}
                    {/*    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}*/}
                    {/*    title={`${movie.original_title}`}*/}
                    {/*/>*/}
                    <img className="card-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} onError={(e)=>addDefaultSrc(e)} width={"100%"}  alt={`${movie.original_title}`} />
                    <CardHeader
                        title={`${movie.original_title} (${movie.release_date.substring(0, 4)})`}
                        className={classes.title}
                        // subheader={`${movie.release_date.substring(0, 4)}`}
                    />

                    <CardContent>
                        <Typography className={truncate && classes.truncate} variant="body2" color="textSecondary" component="p">
                            {movie.overview}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing className={classes.cardActions}>
                        {/*<div className="d-flex align-items-center justify-content-around card-bottom">*/}
                            <Typography variant="body4" color="textSecondary" component="p">
                                    <ThumbUpRoundedIcon/>
                                    <span className="rating">{movie.vote_average}</span>
                            </Typography>
                            <Box className={classes.genres} fontStyle="italic">
                                {movieDetails.genres.map(genre=><span> {genre.name}</span>)}
                            </Box>
                        {/*</div>*/}
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div className="movie-card-trailer mb-2">
                                <iframe
                                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen

                                    width="100%" height="315"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY&fs=1">
                                </iframe>
                            </div>
                            <Typography paragraph>Reviews</Typography>
                            <div className="mb-4">
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada
                                            lacus
                                            ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className={classes.heading}>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada
                                            lacus
                                            ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <Typography paragraph>Similar Movies</Typography>
                            <RelatedMovies/>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.secondExpand, {})}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>}
        </>
    );
}

export default MovieCard;