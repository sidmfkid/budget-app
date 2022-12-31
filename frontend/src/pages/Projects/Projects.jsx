import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";


export function Projects(props) {
    
    return <Container maxWidth="xl" sx={{ height: "calc(100vh - 64px)", width: "100%", marginTop: "64px"}}>
    <NavLink to={'new'}>
    Projects
    </NavLink>
    </Container>
}