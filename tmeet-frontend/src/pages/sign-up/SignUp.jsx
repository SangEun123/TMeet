import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "../components/navigationBar/NavBar";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © Tmeet '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme(
    {
        status: {
            bt_back: '#F4FDFD'
        }
    }
);

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div
            style={{backgroundColor:"white"}}
        >
            <NavBar></NavBar>
            <ThemeProvider theme={theme}>
            <Container
                component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor:"#F9FFFF",
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <img sx={{ m: 1 }}
                         style={{marginBottom:"10px"}}
                         src="img/time.png"></img>
                    <Box component="form" noValidate onSubmit={handleSubmit}
                         sx={{
                             mt: 3 ,
                             marginLeft: 5,
                             marginRight: 5,
                             marginTop: 5
                         }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    id="nickname"
                                    label="닉네임"
                                    name="nickname"
                                    autoComplete="nickname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일 주소"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    name="password confirmation"
                                    label="비밀번호 재확인"
                                    type="password"
                                    id="password confirmation"
                                    autoComplete="pass confirmation"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    name="subway"
                                    label="거주지에서 가까운 지하철역"
                                    type="name"
                                    id="subway"
                                    autoComplete="subway"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowPrivateInfo" color="primary" />}
                                    label="개인정보 수집 및 이용에 동의합니다."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowService" color="primary" />}
                                    label="서비스 이용 약관에 동의합니다."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
        </div>
    );
}