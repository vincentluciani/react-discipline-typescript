import { styled } from '@mui/material/styles';

import Button, { ButtonProps } from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const ColoredButton = styled(Button)<ButtonProps>(({ theme }) => ({
  
 /*   color: 'white',
    backgroundColor: '#b657af',
    '&:hover': {
      backgroundColor: '#b657af',
      borderColor:'white'
    },
    marginRight: '10px',
    marginTop:'10px',
    borderColor:'white'*/
  }));

const SaveButton = () => {
    return(
        <Button sx={{'box-shadow':'none','margin':'10px 10px 10px 0px'}}
        onClick = {() => {console.log('save button clicked')}}
        variant="contained" startIcon={<SaveIcon />}>
        Save
    </Button>
    )
}

export default SaveButton