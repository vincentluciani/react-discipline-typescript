
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Props {
    checkBoxesList: Array<Checkbox>
}

interface Checkbox{
    title: String
}

const CheckBoxGroup = ({checkBoxesList}:Props) => {

    return(
    <FormGroup sx={{
        marginTop:'10px',
      }}>
        <>
        {checkBoxesList.map((item:Checkbox, index:number) => (
            <FormControlLabel 
                control={<Checkbox   
                    sx={{
                        height:'33px',
                    }}
                    defaultChecked 
                />}
                label={item.title}
                sx={{
                    '& .MuiTypography-root':{
                        fontSize: '0.75rem'
                    }}
                } /> ))}
        </>
    </FormGroup>
    )
}

export default CheckBoxGroup
/*
                    sx={{
                        height:'33px',
                        color: 'lightgrey',
                        '&.Mui-checked': {
                            color: 'var(--main-color,black)',
                        }
                    }}
                    */