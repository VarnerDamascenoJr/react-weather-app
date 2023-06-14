
import TextField from '@mui/material/TextField'
import { FormControl, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const InputComponent = () =>{
    return(
        <FormControl>
        <TextField 
            label='Enter city name'
            InputProps={{ startAdornment: <InputAdornment position='start'><SearchIcon/></InputAdornment> }}
            variant='outlined' 
            onChange={(e)=> console.log(e.target.value)}/>
        </FormControl>
    )
}