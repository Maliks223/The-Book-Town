import { TextField,Button } from "@mui/material";
const BannerTitle = () => {
    return ( 
        <div>
            <TextField sx={{marginLeft:'300px', marginTop:'10px'}} id="outlined-basic" label="Banner's Title" variant="outlined" />
            <Button  sx={{marginLeft:'30px', marginTop:'18px'}} variant="outlined">Submit</Button>
        </div>
     );
}
 
export default BannerTitle;