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

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 750,
        maxHeight: 720,
        overflow: 'auto',
        width: '100%',
        border: "5px solid #064789",
        backgroundColor: 'white',
        position: "relative"
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
        paddingTop: '46.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        color: "white",
        background: "#064789",
        '&:hover': {
            background: "#064789",
        },
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    secondExpand: {
        transform: 'rotate(180deg)',
        position: "absolute",
        padding: "10x",
        bottom: "-90.5%",
        right: "1%",
        color: "white",
        background: "#064789",
        '&:hover': {
            background: "#064789",
        },

    },
    expandOpen: {
        transform: 'rotate(180deg)',
        display: 'none'
    }
}));

const MovieCard = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="movie-card">
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="https://www.soda.com/wp-content/uploads/2020/04/harry-potter-streaming-guide.jpg"
                    title="Paella dish"
                />
                <CardHeader
                    title="Harry Potter and the Strange Stranger"
                    subheader="2016"
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <div className="d-flex align-items-center justify-content-around card-bottom">
                        <Typography variant="body4" color="textSecondary" component="p">
                            <div className="d-flex align-items-center">
                                <ThumbUpRoundedIcon/>
                                <span className="rating">85%</span>
                            </div>
                        </Typography>
                        <Typography className={classes.genres} variant="body2" color="textSecondary" component="p">
                            Action/Drama/Romance
                        </Typography>
                    </div>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div className="movie-card-trailer mb-2">
                            <iframe width="100%" height="315"
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
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
                                className={clsx(classes.secondExpand, {
                                })}
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
        </div>
    );
}

export default MovieCard;