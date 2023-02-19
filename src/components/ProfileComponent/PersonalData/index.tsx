import Dumb from './Dumb'
import style from './main.style'
import { uploadNewPersonalData } from './DispatchData'

const PersonalData = () => {
    const classes = style();

    return <Dumb classes={classes} uploadNewPersonalData={uploadNewPersonalData}/>
}

export default PersonalData