import React, { useState, ChangeEvent, useEffect} from 'react';
import './Login.css';
import { Box, Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/token/Actions';
import { toast } from 'react-toastify';



function Login() {

    let navigate = useNavigate();
    //const [token, setToken] = useLocalStorage('token');
    const dispatch = useDispatch();

    const [token, setToken] = useState("");
    
    const [userLogin, setUserLogin] = useState<UserLogin> (
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )
        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token !== ''){
                    console.log("Token:", token)
                    
                    dispatch(addToken(token))
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)
                toast.success('Usuário logado com sucesso', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }catch(error){
                
                toast.error('Erro ao logar! Dados de usuário inconsistentes ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        }

    
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={24}>
                        <form onSubmit={onSubmit}>
                            <Typography className='texto-login' variant='h2' gutterBottom color='textPrimary' component='h2' align='center' style={{color: 'rgba(62, 233, 176, 0.863)', letterSpacing:'2px', fontWeight:'bold', fontStyle:'oblique', fontSize:'4rem'}}>Login</Typography>
                            <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                    <Button type='submit' variant='contained' style={{backgroundColor: 'rgba(62, 233, 176, 0.863)', fontWeight: 'bold'}}>
                                        Login
                                    </Button>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography className='text-decorator-none' variant='subtitle1' gutterBottom align='center' style={{fontSize:'18px', fontWeight:'bold', color:'rgb(31, 153, 143)'}}>Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagem'>

                </Grid>
            </Grid>
        </>

    )
}

export default Login;