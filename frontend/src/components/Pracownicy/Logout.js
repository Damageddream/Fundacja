import React, { useEffect } from 'react';
import axiosInstance from './AxiosInstance';
import { useNavigate} from "react-router-dom";

    const Logout = () => {
    
    let navigate = useNavigate();

	useEffect(() => {
		const response = axiosInstance.post('/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/aktualnosci');
	});
	return <div>Logout</div>;
}

export default Logout;