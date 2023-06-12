import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette:{
        primary:{
            main:"#254659",
            white:"#FFFFFF",
            darkBlue: "#001026",
            radial: "#5096FF",
            lightBlue: "#91DEFF",
            halfBlue: "#2566A3",
        },
        secondary:{
            main:"#254659",
            white:"#FFFFFF"
        }
    },
    typography:{
        subtitle1:{
            fontSize:12,
            fontWeight:400
        },
        body1:{
            fontSize: 14,
            fontWeight:400
        },
        body2:{
            fontSize:16,
            fontWeight:500
        },
        body3:{
            fontSize:18,
            fontWeight:600
        },
        h1:{
            fontSize:36,
            fontWeight:700
        }
    },

})
