
import TextField from '@mui/material/TextField'

export const Input = () =>{
    return(
        <>
        <TextField label='Enter city name' variant='outlined' onChange={(e)=> console.log(e.target.value)}/>
        </>
    )
}