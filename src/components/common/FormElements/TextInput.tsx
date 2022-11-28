import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { alpha, styled } from '@mui/material/styles';

interface Props{
    title: String
}

const CssTextField = styled(TextField)({
    borderTop: '5px',
    backgroundColor: 'white',
    '& label.Mui-focused': {
      color: 'var(--main-color,black)',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'var(--main-color,black)',
      },
    },
  });

const TextInput = ({title}:Props) => {

    return(
    <FormControl fullWidth>
        <CssTextField  fullWidth label={title}
        margin="normal"  />
    </FormControl>
    )
}

export default TextInput