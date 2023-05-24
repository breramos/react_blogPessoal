import React from "react";
import { AppBar, Toolbar, Box, Typography, Grid } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';


function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado!")
        navigate('/login')
    }

    return (
        <>

            <AppBar position="static" style={{backgroundColor: "#564787"}}>
                <Toolbar variant="dense" style={{display:"flex", justifyContent:"space-between"}}>
                    <Box mx={1} display="block" width="100px" style={{ cursor: "pointer", marginTop: "10px", marginBottom: "10px", justifyContent: "flex-start" }}>
                        <Typography variant="h5" style={{color:"#69f0ae", fontWeight:"600"}}>
                            Meu Blog Pessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <Link to='/home' className="text-decorator-none">
                            <Box mx={10} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" style={{color:"#e6ac00", fontWeight:"600"}}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/postagens' className="text-decorator-none">
                            <Box mx={9} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" style={{color:"#e6ac00", fontWeight:"600"}}>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className="text-decorator-none">
                            <Box mx={9} style={{ cursor: "pointer"}}>
                                <Typography variant="h6" style={{color:"#e6ac00", fontWeight:"600"}}>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={10} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" style={{color:"#e6ac00", fontWeight:"600"}}>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={6} style={{ cursor: "pointer"}} onClick={goLogout}>
                                <Typography variant="h6" style={{color:"#5c85d6", fontWeight:"600"}}>
                                    Logout
                                </Typography>
                            </Box>
                        
                        
                    </Box>
                </Toolbar>
            </AppBar>

        </>

    )

}

export default Navbar;