import axios from 'axios';

const firebase = axios.create({
	baseURL: 'https://wincacademydatabase.firebaseio.com/eurvin/',
});

const uinames = axios.create({
	baseURL: 'https://uinames.com/api/',
});

export default { firebase, uinames };
