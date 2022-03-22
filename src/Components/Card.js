import { Search } from '@mui/icons-material';
import { Button, CardActions, CardContent,CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

function Card(props) {
    return (
        <div>
             
            <Card
            sx={{height:'100%', display:'flex', flexDirection:'coloumn'}} >
                <CardHeader>
                 This Is Card Header    
            </CardHeader>
            <CardMedia  sx={{pt:"50.25%"}}>

            </CardMedia>
            <CardContent sx={{flexGrow:1}}>
                <Typography guttorBottom="h5" style={{textAlign:"center"}} component="h2">

                </Typography>

            </CardContent>

            <CardActions>
                <Button startIcon={<Search/>}></Button>
            </CardActions>

                </Card>
            


         
           
        </div>
    );
}

export default Card;