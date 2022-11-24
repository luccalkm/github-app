import {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { FaExclamationTriangle } from 'react-icons/fa';

// Feito como context somente para testar situações.

const Alert = () => {
    const {alert} = useContext(AlertContext);

    return alert !== null && (
        <p className="flex items-start mb-2 space-x-2 ">
            {alert.type === 'error' && (
                <FaExclamationTriangle className='mt-2' style={{color: '#FF2400'}}></FaExclamationTriangle>
            )}
            <span className="flex-1  text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong></span>
        </p>
    )
}

export default Alert;
