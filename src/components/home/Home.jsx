import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export default function Home() {
  return (
   <Box >
      <Typography display='flex' justifyContent='center' marginTop='10%' sx={{ fontSize: 30 }} color="#41280f">
          Bem vindo ao Coffee
        </Typography>
        <Typography display='flex' justifyContent='center'>
        The cafe was developed to improve front-end knowledge, <br/>
      the next stage will be developed to improve back-end knowledge
        </Typography>
   </Box>
    

  );
}