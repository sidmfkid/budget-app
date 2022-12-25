import { Box, Container } from "@mui/material";
import { FormList } from "../../../components";
export function NewProject(props) {
    
    return <Container maxWidth="md" sx={{ height: "calc(100vh - 64px)", width: "100%", marginTop: "64px"}}>
    <Box sx={{padding: "2.4rem 0"}}>
<FormList></FormList>
</Box>
    </Container>
}