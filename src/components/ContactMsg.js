import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from "@mui/material";

const ContactMsg = () => {
    return ( 
        <TableContainer component={Paper} sx={{maxHeight:'600px',maxWidth:'70%', marginLeft :'255px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>Email</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>Message</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        tableData.map((row) =>(
                            <TableRow key={row.Name} sx={{'&:last-child td, &last-child th': {border:0}}} >
                                <TableCell>{row.Name}</TableCell>
                                <TableCell>{row.Email}</TableCell>
                                <TableCell>{row.Message}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

            </Table>

        </TableContainer>
     );
}
 
export default ContactMsg;
const tableData=[{
    "Name": "Kristian",
    "Email": "krizzillo0@blogspot.com",
    "Message": "Occlusion and stenosis of right middle cerebral artery"
  }, {
    "Name": "Rip",
    "Email": "rcossentine1@mozilla.org",
    "Message": "Pathological dislocation of left shoulder, not elsewhere classified"
  }, {
    "Name": "Ervin",
    "Email": "ecreffield2@webnode.com",
    "Message": "Other fracture of upper and lower end of left fibula, subsequent encounter for closed fracture with routine healing"
  }, {
    "Name": "Whittaker",
    "Email": "wdarbishire3@prnewswire.com",
    "Message": "Nondisplaced fracture of fourth metatarsal bone, unspecified foot, sequela"
  }, {
    "Name": "Shelby",
    "Email": "sroselli4@ameblo.jp",
    "Message": "Assault by other hot objects, subsequent encounter"
  }, {
    "Name": "Tore",
    "Email": "twindows5@ameblo.jp",
    "Message": "Moderate laceration of heart with hemopericardium, subsequent encounter"
  }, {
    "Name": "Homere",
    "Email": "hleggat6@parallels.com",
    "Message": "Other complications specific to multiple gestation, unspecified trimester, fetus 4"
  }]