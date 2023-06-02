import React from "react";
import { Box, Typography, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";

function Footer() {

    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    var footerComponent;

    if (token !== '') {

        footerComponent =
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box style={{ backgroundColor: "#EB9486", height: "120px" }}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" gutterBottom style={{ color: "#4A001F", fontWeight: "400" }}>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookIcon style={{ fontSize: 50, color: "#4A001F" }} />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <InstagramIcon style={{ fontSize: 50, color: "#4A001F" }} />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 50, color: "#4A001F" }} />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#7E7F9A", height: "80px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#660066", fontSize: "16px", fontWeight: "600" }} >© 2023 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org" className="text-decorator-none">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "#660066", fontSize: "16px", fontWeight: "600" }} align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>

    )
}

export default Footer;