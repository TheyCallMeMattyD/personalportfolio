import React from 'react';
import ResumeBlock from "./ResumeBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Resume() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.resume.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ResumeBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};