import localFont from "next/font/local";
import {Lilita_One} from "next/font/google";

export const ashingFont = localFont({ src: './Ahsing-Regular.otf' })

export const lilitaFont = Lilita_One({
    weight: '400',
    subsets: ['latin'],
})