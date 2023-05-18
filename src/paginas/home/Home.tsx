import React from "react";
import { Box, Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import Carrossel from "../../components/carrossel/Carrossel";

function Home () {

    return (
        <>

            <Grid container style={{ marginTop: "8px" }}>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>


            {/* <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#F3DE8A" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} display="flex" style={{gap: "60px", margin:"auto"}}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#3e2723", fontWeight: "bold"}}>Seja bem vinde!</Typography>
                        <Typography className= "home_frase1" variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#3e2723", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" marginTop="80px" justifyContent="space-evenly">
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#FF9770", color: "black", fontWeight:"600" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid> */}
    
        </>
    )
};

export default Home;