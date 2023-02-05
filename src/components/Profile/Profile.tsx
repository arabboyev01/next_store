import {useSelector} from "react-redux";
import {validataionCode} from "../../redux/CartSlice";
import ProfileComponent from "../ProfileComponent/ProfileComponent"

const Profile = () => {
    const validate = useSelector(validataionCode)

    return validate ? <ProfileComponent /> : "Iltimos ro'yhatdan o'ting"
}
export default Profile
