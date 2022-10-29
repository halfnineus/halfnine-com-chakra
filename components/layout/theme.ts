// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
// https://palette.saas-ui.dev/
const theme = extendTheme({
    colors: {
        brand: {
            "50": "#EBF8FF",
            "100": "#BEE3F8",
            "200": "#63B3ED",
            "300": "#4299E1",
            "400": "#4299E1",
            "500": "#3182CE",
            "600": "#2B6CB0",
            "700": "#2C5282",
            "800": "#2A4365",
            "900": "#1A365D"
        },
    },
    // breakpoints: {
    //     sm: '30em',
    //     md: '48em',
    //     lg: '62em',
    //     xl: '80em',
    //     '2xl': '96em',
    // }
})

export default theme