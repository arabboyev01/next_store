import Dumb from './Dumb'
import style from './main.style'
import { ResendPassword, uploadNewPersonalData } from './DispatchData'
import {useState} from "react"
const PersonalData = () => {
    const classes = style();
    const [data, setData] = useState<null | object>(null)
    const sendMainData = (values: any) => {
        return uploadNewPersonalData(values,setData, data )
    }

    return <Dumb
        classes={classes}
        uploadNewPersonalData={sendMainData}
        ResendPassword={ResendPassword}
    />
}

export default PersonalData