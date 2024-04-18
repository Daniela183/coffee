import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <Card style={{ marginLeft:'30%', marginBottom:'25px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Bem vindo ao Coffee
        </Typography>
        <Typography variant="body2">
        It's important to take care of yourself and others
        </Typography>
      </CardContent>
    </Card>
  );
}