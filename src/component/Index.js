import React from 'react';
import {Typography , Box} from '@material-ui/core';
import S1 from "../images/SignIn.jpg"
import S2 from "../images/SignIn2.jpg"

const Index = () => {
    return (

<Box>
            <Box>
            <Typography variant="h3" component="h3">
                Constuction Manager Tutorial
                </Typography>
                    </Box>

            <Box>
            <Typography variant="h6" component="h6">
           How to Log in Construction Manager App
            </Typography>

            <img src={S1} alt="fill murray" style={{ width: 200, height: 300 }} />

            </Box>


            <Box>
            <Typography variant="h6" component="h6">
         Select One of your Gmail account to login
            </Typography>

            <img src={S2} alt="fill murray" style={{ width: 200, height: 300 }} />

            </Box>
</Box>
    


      );
} 
 
export default Index;