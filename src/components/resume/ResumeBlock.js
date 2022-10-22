import React from 'react';
import { Box } from "@mui/material";

function ResumeBlock(props) {
   // eslint-disable-next-line
   const { image, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'Resume'} boxShadow={'2px 2px 7px 6px #a9a9a9'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}
               backgroundColor={'#808000'} boxShadow={'2px 2px 7px 6px #a9a9a9'}>
               <a href="/documents/2022DanielsResume.pdf" target="_blank" rel="noreferrer noopener"><h5>Download</h5></a>
            </Box>
         </Box>
      </Box>
   );
}

export default ResumeBlock;