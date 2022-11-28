import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const ColoredButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: '#b657af',
    '&:hover': {
      backgroundColor: '#b657af',
    },
    marginRight: '5px',
    marginTop:'5px'
  }));

const SaveButton = () => {
    return(
        <ColoredButton variant="contained" startIcon={<SaveIcon />}>
        Save
    </ColoredButton>
    )
}

export default SaveButton