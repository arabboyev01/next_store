import {useSelector} from "react-redux";
import {validataionCode} from "../../redux/CartSlice";
import ProfileComponent from "../ProfileComponent/ProfileComponent"
import SignInInfo from '../../documents/Reusiable/SignInInfo/SignInInfo'

const Profile = () => {
    const validate = useSelector(validataionCode)

    return validate ? <ProfileComponent /> : <SignInInfo />
}
export default Profile
