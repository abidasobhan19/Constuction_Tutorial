import React from 'react';
import {Typography , Box} from '@material-ui/core';
import S1 from "../images/SignIn.gif"
import createproject from "../images/createproject.gif"
import updateproject from "../images/updateproject.gif"
import deleteproject from "../images/deleteproject.gif"
import projectshare from "../images/projectshare.gif"
import taskentry from "../images/taskentry.gif"
import workdone from "../images/workdone.gif"


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

            <img src={S1} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box>  
            
              <Box>
            <Typography variant="h6" component="h6">
        How to  Create Project in App
            </Typography>

            <img src={createproject} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box> 
            
            <Box>
            <Typography variant="h6" component="h6">
        How to  Update Project in App
            </Typography>

            <img src={updateproject} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box> 

            <Box>
            <Typography variant="h6" component="h6">
        How to Delete Project in App
            </Typography>

            <img src={deleteproject} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box>
   <Box>
            <Typography variant="h6" component="h6">
        How to Share Project in App
            </Typography>

            <img src={projectshare} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box>

  <Box>
            <Typography variant="h6" component="h6">
        How to Entry task  in App
            </Typography>

            <img src={taskentry} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box> 
            
            
            <Box>
            <Typography variant="h6" component="h6">
        Work Done Entry Through App
            </Typography>

            <img src={workdone} alt="fill murray" style={{ width: 230, height: 340 }} />

            </Box>


        





 






</Box>
    


      );
} 
 
export default Index;