import { Oval } from  'react-loader-spinner'
const MainLoader = () => {
    return(
        <Oval
            color="#0072b1"
            visible={true}
            ariaLabel='oval-loading'
            height={60}
            width={60}
            secondaryColor="#ccc"
        />
    )
}

export default MainLoader ;
