import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Checkbox, Grid } from '@mui/material';
import { useNavigate } from 'react-router';

function Cadastro() {
    const [endereco, setEndereco] = useState({});
    const [cep, setCep] = useState('');

    const nav = useNavigate ();

    const handleClick = () => {
        nav("/login")
    };

    const handleBuscarCep = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/`);
            const data = await response.json();
            setEndereco(data);
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };
    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', border: '2px solid black', padding: '40px', height: '600px', width: '700px', marginTop: '10%', rowGap: '8px' }}>
                <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: '#000' }} variant="body1" gutterBottom>Cadastro</Typography>
                <TextField style={{ padding: '5px' }} label='Nome'></TextField>
                <Grid container spacing={2}>
                    <Grid item xs={20}>
                        <TextField style={{ padding: '5px', width: '430px' }} label='Email'></TextField>
                        <TextField style={{ padding: '5px', width: '185px' }} label='Cpf'></TextField>
                    </Grid>
                </Grid>
                <TextField style={{ padding: '5px' }} label='Endereço'></TextField>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <TextField style={{ padding: '5px', width: '200px' }} label='Cidade'></TextField>
                        <TextField style={{ padding: '5px', width: '150px' }} label='Bairro'></TextField>
                        <TextField style={{ padding: '5px', width: '150px' }} label='Estado'></TextField>
                        <TextField style={{ padding: '5px', width: '130px' }} label='CEP' value={cep} onChange={(e) => setCep(e.target.value)}></TextField>
                        <Button variant="contained" color="primary"  onClick={handleBuscarCep}>Buscar</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={20}>
                        <Checkbox variant='contained'></Checkbox> Li e concordo com os termos de uso
                    </Grid>
                </Grid>

                <Button variant="contained" color="success" style={{ background: '#c49869', color: '#000' }}>Enviar o formulário</Button>
                <Button variant="outlined" color="success" onClick={handleClick} style={{ color: '#000', border: '1px solid #643200c7' }}>Não tenho cadastro</Button>


            </Box>
            
        </Box>
    );
}

export default Cadastro;
