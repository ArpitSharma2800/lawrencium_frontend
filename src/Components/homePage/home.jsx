import React from 'react'
import AppBarHome from './src/appbar'
import OutlinedCard from './src/fileList'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
import DataGridDemo from './src/Table/table';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        marginLeft: 10
    }
}));
export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <AppBarHome />
            <Typography className={classes.title} variant="h6" component="h2">
                Previously Uploaded Files:
                    </Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={0}>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item>
                                <OutlinedCard filename={"dw"} date={"12/06/2020"} records={50} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* <DataGridDemo /> */}
        </div>
    )
}
