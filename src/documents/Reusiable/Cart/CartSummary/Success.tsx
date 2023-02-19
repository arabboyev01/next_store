import { Box } from '@mui/system'
import successImage from "../../../../../public/assets/images/success.png"
import style from "./summary.style"
import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
const Success = () => {
    const classes = style()
    const router = useRouter()
    const gaBack = () => {
        router.push({pathname: "/"})
    }
    return(
        <Box className={classes.successWrapper}>
            <Image src={successImage.src} alt='successImage' width={150} height={150}/>
            <Typography className={classes.succesText}>Sizning so&apos;rovingiz qabul qilindi.</Typography>
            <Box className={classes.successButton} onClick={gaBack}>
                <Button className={classes.submitButton}>Asosiy sahifaga qaytish</Button>
            </Box>
        </Box>
    )
}
export default Success