import Dumb from './Dumb'
import style from './main.style'
import { ResendPassword, uploadNewPersonalData } from './DispatchData'

const PersonalData = () => {
    const classes = style();

    return <Dumb
        classes={classes}
        uploadNewPersonalData={uploadNewPersonalData}
        ResendPassword={ResendPassword}
    />
}

export default PersonalData