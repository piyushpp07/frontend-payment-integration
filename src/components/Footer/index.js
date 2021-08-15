import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';




const useStyle = makeStyles(theme => ({
    footer: {
        backgroundColor: "white",
        width: '100%',
        zIndex: 2,
        position: 'relative',
        marginBottom: '0em',
        borderTop: '10px solid #FFF5EB'
    },
    center: {
        margin: "0 auto"
    },
}));
export default function Footer(props) {
    const classes = useStyle();

    return (
        <footer className={classes.footer}>
            <Grid container justifyContent='center'>
                <Grid item>
                    <Typography variant="body2" style={{ color: '#195190', textAlign: 'center', marginTop: '2em' }}>
                        Made By Piyush Paradkar
                    </Typography>
                    <Typography variant="body2" style={{ color: '#195190', textAlign: 'center', marginBottom: '2em' }}>
                        {'Copyright © '}
                        Techwanderer.xyz                 {' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    )
}