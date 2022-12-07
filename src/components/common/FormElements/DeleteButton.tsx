import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ColoredButton = styled(Button)<ButtonProps>(({ theme }) => ({
    /*color: 'white',
    backgroundColor: '#b657af',
    '&:hover': {
      backgroundColor: '#b657af',
      borderColor:'white'
    },
    marginRight: '5px',
    marginTop:'10px',
    borderColor:'white'*/
  }));

const DeleteButton = () => {
    return(
        <ColoredButton variant="outlined" startIcon={<DeleteIcon />}>
        Delete
    </ColoredButton>
    )
}

export default DeleteButton