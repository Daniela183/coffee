import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/material';
import doces from '../../img/doces.png'


export default function Doces() {
    return (
        <ImageList style={{ marginLeft: '30%', backgroundColor:'#e0b68a' }} sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                    <Box >
                        <img className='logo' style={{ height: '100px', width: '300px', justifyItems: 'center' }} src={doces} alt="logo" />
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

];