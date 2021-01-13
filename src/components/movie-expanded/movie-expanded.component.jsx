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
import RelatedMovies from "../related-movies/related-movies.component";


//TODO TRAVA EDW TA MOVIE DETAILS KAI KANE TO MOVIE EXPANDED HYDRATE

const MovieExpanded = ({movie}) => {
        const useStyles = makeStyles((theme) => ({
            root: {
                maxWidth: "100%",
                maxHeight: "100%",
                overflow: 'auto',
                width: '100%',
                backgroundColor: 'white',
                position: 'relative'
            },
            genres: {
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
                backgroundSize:"contain",
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
                display:"flex",
                alignItems:'center',
                justifyContent:'center',
                maxHeight:"300px"
            },
            image: {
                width: "100%",
                height: "100%",
            },
            trailer : {
                width:"100%",
                height:"520px",
                margin:"auto",
                '@media (max-width:380px)': {
                    height: '200px',
                    width:"100%"
                }
            }
        }));
        const classes = useStyles();


    return (
        <>
            {movie && <div>
                <Card className={classes.root} raised>
                    {/*<CardMedia*/}
                    {/*    className={classes.media}*/}
                    {/*    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}*/}
                    {/*    title={`${movie.original_title}`}*/}
                    {/*/>*/}

                    <CardContent>
                        <div className={classes.trailer}>
                            <iframe width="100%" height="100%"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <CardContent>
                            <Typography variant="p" component="p" align="center" >
                                {movie.overview}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <div className="d-flex align-items-center justify-content-around card-bottom">
                                <Typography variant="body4" color="textSecondary" component="p">
                                    <div className="d-flex align-items-center">
                                        <ThumbUpRoundedIcon/>
                                        <span className="rating">{movie.vote_average}</span>
                                    </div>
                                </Typography>
                                <Typography className={classes.genres} variant="body2" color="textSecondary" component="p">
                                    Action/Drama/Romance
                                </Typography>
                            </div>
                        </CardActions>
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
                    </CardContent>

                </Card>
            </div>}
        </>
    );
}
;

export default MovieExpanded;