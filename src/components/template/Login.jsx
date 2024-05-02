import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Login() {
    const navigate = useNavigate();

    const handleClick = (rota) => {
        navigate(rota);
    };


    return (
        <Box style={{ display: 'flex', justifyContent: 'center',  minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', border: '2px solid black', padding: '40px', height: '400px', width: '300px', marginTop: '10%', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}variant="body1" gutterBottom>Login</Typography>
                <TextField label="Email" />
                <TextField style={{ marginBottom: '15px'}} type='password' label="Senha" />
                <Button  variant="contained" color="success" style={{ background: '#c49869', color: '#000' }}>Entrar</Button>
                <Button onClick={() => handleClick('/cadastro')} variant="outlined" color="success" style={{ color: '#000', border: '1px solid #643200c7' }} >Já tenho cadastro</Button>
                <Button variant="outlined" color="success" style={{ color: '#000', border: '1px solid #643200c7' }}>Recuperar senha</Button>
            </Box>
        </Box>
    );


}
export default Login;