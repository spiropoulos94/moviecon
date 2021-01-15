import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import RelatedMovies from "../related-movies/related-movies.component";
import Box from '@material-ui/core/Box';
import YouTube from 'react-youtube';


const MovieExpanded = ({movie, movieDetails}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: 'auto',
            width: '100%',
            backgroundColor: 'white',
            position: 'relative'
        },
        cardContent: {
            color:'white',
            backgroundColor:'#4e5283'
        },
        genres: {
            color:'white',
            fontSize: '1rem',
            '@media (max-width:320px)': {
                fontSize: '0.75rem',
            },
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        media: {
            height: 0,
            paddingTop: '36.25%', // 16:9
            backgroundSize: "contain",
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
        expandOpen: {
            transform: 'rotate(180deg)',
            display: 'none'
        },
        imageWrapper: {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: "300px"
        },
        image: {
            width: "100%",
            height: "100%",
        },
        trailer: {
            width: "100%",
            height: "530px",
            margin: "auto",
            '@media (max-width:420px)': {
                height: '200px',
                width: "100%"
            }
        }
    }));
    const classes = useStyles();


    return (
        <>
            {movie && <>
                {/*<CardMedia*/}
                {/*    className={classes.media}*/}
                {/*    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}*/}
                {/*    title={`${movie.original_title}`}*/}
                {/*/>*/}
                <CardContent className={classes.cardContent}>
                    {/*<div className={classes.trailer}>*/}
                    {/*<iframe width="100%" height="100%"*/}
                    {/*        src={`https://www.youtube.com/embed/59fc956792514113bb02d590`}>*/}
                    {/*</iframe>*/}
                    {movieDetails.videos.results.length > 0 && <YouTube videoId={movieDetails.videos.results[0].key} className={classes.trailer}/>}
                    {/*</div>*/}
                    <Box fontStyle="italic" fontSize={"1.5rem"}>
                        <Typography variant="p" component="p" align="center">
                            {movieDetails.tagline}
                        </Typography>
                    </Box>
                    <Typography variant="p" component="p" align="center">
                        {movieDetails.overview}
                    </Typography>
                    <CardActions disableSpacing>
                        <div className="d-flex align-items-center justify-content-around card-bottom">
                            <Typography className={classes.cardContent} variant="body4" color="textSecondary" component="p">
                                <div className="d-flex align-items-center">
                                    <ThumbUpRoundedIcon/>
                                    <span className="rating">{movieDetails.vote_average}</span>
                                </div>
                            </Typography>
                            <Typography  className={classes.genres} variant="body2" color="textSecondary"
                                        component="p">
                                {movieDetails.genres.map(genre => <span> {genre.name}</span>)}
                            </Typography>
                        </div>
                    </CardActions>

                    {movieDetails.similar.results.length > 0 && <Typography paragraph>Similar Movies</Typography>}
                    <RelatedMovies relatedMovies={movieDetails.similar.results}/>
                    {movieDetails.reviews.results.length > 0 && <Typography paragraph>Reviews</Typography>}
                    <div className="mb-4">
                        {movieDetails.reviews.results.map(({author, content}) =>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{author}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {content}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>)}
                    </div>
                </CardContent>
            </>}
        </>
    );
}
;

export default MovieExpanded;