import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const ColoredButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#b657af',
    '&:hover': {
      backgroundColor: '#b657af',
      borderColor:'white'
    },
    marginRight: '10px',
    marginTop:'10px',
    borderColor:'white'
  }));

const SaveButton = () => {
    return(
        <ColoredButton variant="outlined" startIcon={<SaveIcon />}>
        Save
    </ColoredButton>
    )
}

export default SaveButton