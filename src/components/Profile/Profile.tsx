import {useSelector} from "react-redux";
import {validataionCode} from "../../redux/CartSlice";
import {Box} from "@mui/system";

const Profile = () => {
    const validate = useSelector(validataionCode)

    return(
        <Box>
            {validate ? "Bu sizning profilingiz" : "Iltimos ro'yhatdan o'ting"}
        </Box>
    )
}
export default Profile
