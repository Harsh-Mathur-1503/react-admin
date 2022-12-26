import { Box , useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import {ColourModeContext , tokens} from "../../theme";
import InputBase from "@mui/material/InputBase";
import { SearchOutlined } from "@mui/icons-material";
import { NotificationsActiveOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { Person2Outlined } from "@mui/icons-material";
import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";

const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColourModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>


            {/* Search Bar */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ml:2 , flex:1}} placeholder="Search" />
            <IconButton type="button" sx={{p:1}}>
                <SearchOutlined /> 
            </IconButton>
            </Box>

            {/* ICONS  */}
        <Box display="flex">

            <IconButton onClick={colorMode.toggleColourMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlined />
                ):(
                    <LightModeOutlined />
                )}
            </IconButton>
            <IconButton>
                    <NotificationsActiveOutlined />
            </IconButton>

            <IconButton>
                    <SettingsOutlined />
            </IconButton>

            <IconButton>
                    <Person2Outlined />
            </IconButton>
                
        </Box>
    </Box>
    )
}
export default Topbar;