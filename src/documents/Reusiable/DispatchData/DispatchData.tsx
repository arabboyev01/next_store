import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../../redux/fetchData';

const SendData = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchData())

    }, [dispatch])
}
export default SendData;
