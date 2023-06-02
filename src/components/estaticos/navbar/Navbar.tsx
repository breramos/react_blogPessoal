import React from "react";
import { AppBar, Toolbar, Box, Typography, Grid } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { addToken } from "../../../store/token/Actions";
import { toast } from 'react-toastify';
//import useLocalStorage from "react-use-localstorage";


function Navbar() {

    //const [token, setToken] = useLocalStorage('token');
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {

        navbarComponent =
            <AppBar position="static" style={{ backgroundColor: "transparent" }}>
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Box mx={1} display="block" width="100px" style={{ cursor: "pointer", marginTop: "10px", marginBottom: "10px", justifyContent: "flex-start" }}>
                        <Typography variant="h5" style={{ color: "#69f0ae", fontWeight: "600" }}>
                            Meu Blog Pessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <Link to='/home' className="text-decorator-none">
                            <Box mx={10} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "#e6ac00", fontWeight: "600" }}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/postagens' className="text-decorator-none">
                            <Box mx={9} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "#e6ac00", fontWeight: "600" }}>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className="text-decorator-none">
                            <Box mx={9} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "#e6ac00", fontWeight: "600" }}>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={10} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "#e6ac00", fontWeight: "600" }}>
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={6} style={{ cursor: "pointer" }} onClick={goLogout}>
                            <Typography variant="h6" style={{ color: "#5c85d6", fontWeight: "600" }}>
                                Logout
                            </Typography>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>

    }
    return (
        <>
            {navbarComponent}
        </>

    )

}

export default Navbar;