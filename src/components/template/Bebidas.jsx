import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/material';
import bebidas from '../../img/bebidas.png'


export default function Bebidas() {
    return (
        <ImageList style={{ marginLeft: '30%', backgroundColor:'#e0b68a' }} sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                    <Box >
                        <img className='logo' style={{ height: '100px', width: '300px', justifyItems: 'center' }} src={bebidas} alt="logo" />
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
        img: 'https://static.wixstatic.com/media/83687c_4835bc591c25435391209ac3beaa6a68~mv2.jpg/v1/fill/w_454,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_4835bc591c25435391209ac3beaa6a68~mv2.jpg',
        title: 'CAFÉ MOCHA',
        rows: 2,
        cols: 2,

    },
    {
        img: 'https://static.wixstatic.com/media/83687c_d9fcdf0898704e7cb3535fcaf24c97db~mv2.jpg/v1/fill/w_454,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_d9fcdf0898704e7cb3535fcaf24c97db~mv2.jpg',
        title: 'FRAPÊ',
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_6f1ba77d39464b799939db8f9ed21fe1~mv2.jpg/v1/fill/w_454,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_6f1ba77d39464b799939db8f9ed21fe1~mv2.jpg',
        title: 'SPRITZ DE MARACUJÁ',
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_cec837c11bee4797a2b66a63cf2e0db9~mv2.jpg/v1/fill/w_486,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_cec837c11bee4797a2b66a63cf2e0db9~mv2.jpg',
        title: 'CHÁ GELADO DE PÊSSEGO',
        cols: 2,
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_7455b4f739ce4d5a9d24275e0af3a186~mv2.jpg/v1/fill/w_454,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_7455b4f739ce4d5a9d24275e0af3a186~mv2.jpg',
        title: 'CAFÉ EXPRESSO',
        cols: 2,
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_cd86072ef4904e3990132b009dd5f747~mv2.jpg/v1/fill/w_437,h_681,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_cd86072ef4904e3990132b009dd5f747~mv2.jpg',
        title: 'CAFÉ BRIGADEIRO',
        cols: 2,
    }

];