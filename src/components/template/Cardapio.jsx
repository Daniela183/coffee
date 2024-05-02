import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/material';
import cardapio from '../../img/cardapio.PNG'

export default function Cardapio() {
    return (
        <ImageList sx={{width: '100vh', marginTop:'7%', marginLeft:'22%' }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div"  >
                    <Box display="flex" width="100%" justifyContent="center">
                        <img className='bebidas' style={{ height: '100px', width: '300px', justifyItems: 'center' }} src={cardapio} alt="bebidas" />
                    </Box>
                </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img} >
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        width="40%"
                    />
                    <ImageListItemBar
                        title={item.title} />
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
    ,{
        img: 'https://static.wixstatic.com/media/83687c_4a1b79692b504373b510bafda2bec5d9~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_4a1b79692b504373b510bafda2bec5d9~mv2.jpg',
        title: 'PASTEL DE BÉLEM',
        rows: 2,
        cols: 2,

    },
    {
        img: 'https://static.wixstatic.com/media/83687c_f504cbb5b96e4210a22e508c97af7c85~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_f504cbb5b96e4210a22e508c97af7c85~mv2.jpg',
        title: 'TORTINHA DE MORANGO',
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_9041923539824894abbb97614ef552ba~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_9041923539824894abbb97614ef552ba~mv2.jpg',
        title: 'BANOFFEE',
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_20d298af3f54499e84994deb3cc314de~mv2.jpg/v1/fill/w_766,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/83687c_20d298af3f54499e84994deb3cc314de~mv2.jpg',
        title: 'CAROLINA',
        cols: 2,
    },
    {
        img: 'https://static.wixstatic.com/media/83687c_fb388747182742179c8d993baae07968~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_fb388747182742179c8d993baae07968~mv2.jpg',
        title: 'CHEESECAKE FRUTAS VERMELHAS',
        cols: 2,
    },
    
    {
        img: 'https://static.wixstatic.com/media/83687c_0fd1b873b6024479b9a2c777773ea0c9~mv2.jpg/v1/fill/w_341,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/83687c_0fd1b873b6024479b9a2c777773ea0c9~mv2.jpg',
        title: 'VANDERLÉIA',
        cols: 2,
    }
    , {
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


