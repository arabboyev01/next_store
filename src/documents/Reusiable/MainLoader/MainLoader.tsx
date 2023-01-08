import { FallingLines } from  'react-loader-spinner'
const MainLoader = () => {
    return(
        <FallingLines
            color="#0072b1"
            width="100"
            visible={true}
            // @ts-ignore
            ariaLabel='falling-lines-loading'
        />
    )
}
export default MainLoader;
