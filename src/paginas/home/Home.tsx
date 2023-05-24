import React, { useEffect } from "react";
import { Box, Typography, Grid, Button } from '@material-ui/core';
import './Home.css';
import Carrossel from "../../components/carrossel/Carrossel";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home () {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])


    return (
        <>

            {/* <Grid container>
                
            </Grid> */}


            <Grid className="caixa" container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                        <Carrossel />
                    </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#3e2723", fontWeight: "bold"}}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#3e2723", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#FF9770", color: "black", fontWeight:"600" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens" style={{ backgroundColor: "white" }}>
                    <TabPostagem />          
                </Grid>
            </Grid>
    
        </>
    )
};

export default Home;