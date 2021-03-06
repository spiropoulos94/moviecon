import React,{useState} from 'react';
import "./search-input.styles.scss";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "transparent",
        height:"15vh",
        "@media(max-width:320px)":{
            height:"20vh"
        }

    },
    heading: {
        backgroundColor: "transparent",
        fontSize:"2.5rem",
        textAlign:'center',
        fontFamily:"'Lobster', cursive",
        letterSpacing:'2px',
        color:"#064789",
        "@media(max-width:320px)":{
            fontSize:"2rem"
        }
    },
    searchButton: {
        color:'white'
    }


}));


const FullWidthTabs = ({setContent, setSearchQuery}) => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        setSearchQuery(inputValue)
        setContent("search")
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (

        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Now Playing" onClick={()=>setContent("now_playing")} {...a11yProps(0)} />
                    <Tab label="Search for a Movie" onClick={()=>setContent("search")} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                   <Box className={classes.heading}> Latest Releases </Box>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="search-input" >
                        <form onSubmit={handleSubmit} className="d-flex no-wrap">
                            <input onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} className="form-control" type="search" placeholder="Type movie title..." aria-label="Search"/>
                            <button   className={`btn ${classes.searchButton}`} type="submit">Search</button>
                        </form>
                    </div>
                </TabPanel>

            </SwipeableViews>
        </div>
    );
};

export default FullWidthTabs;
