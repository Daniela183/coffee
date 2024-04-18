import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/material';
import salgado from '../../img/salgado.png'


export default function Salgados() {
    return (
        <ImageList style={{ marginLeft: '30%', backgroundColor:'#e0b68a' }} sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                    <Box >
                        <img className='logo' style={{ height: '100px', width: '300px', justifyItems: 'center' }} src={salgado} alt="logo" />
                    </Box>
                </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}/>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://static.wixstatic.com/media/83687c_fa750479fa9b44448b9903d85d4a378a~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_fa750479fa9b44448b9903d85d4a378a~mv2.jpg',
        title: 'COXINHA DE FRANGO',
        rows: 2,
        cols: 2,

    },
    {
        img: 'https://static.wixstatic.com/media/83687c_687164afa3534933bf77d0f46cab54ae~mv2.jpg/v1/fill/w_766,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/83687c_687164afa3534933bf77d0f46cab54ae~mv2.jpg',
        title: 'BOLINHO DE CARNE SECA',
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_2168cd2457534a02be60537b0298f0d3~mv2.jpg/v1/fill/w_725,h_483,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_2168cd2457534a02be60537b0298f0d3~mv2.jpg',
        title: 'PASTEL GAÚCHO',
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_f5161527b26d490fac41ec3dcc18ac45~mv2.jpg/v1/fill/w_766,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/83687c_f5161527b26d490fac41ec3dcc18ac45~mv2.jpg',
        title: 'PÃO DE BATATA',
        cols: 2,
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_c1b7fdb214af4ab6846b606ee65c7305~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_c1b7fdb214af4ab6846b606ee65c7305~mv2.jpg',
        title: 'FOLHADO DE PARMESÃO',
        cols: 2,
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_6e41bf50cc8d4c4787e5457f1300604a~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_6e41bf50cc8d4c4787e5457f1300604a~mv2.jpg',
        title: 'CROISSANT RECHEADO',
        cols: 2,
    }

];