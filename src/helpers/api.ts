import axios from 'axios';
import { API_DOMAIN } from 'src/config/constants';

const api = axios.create({ url: API_DOMAIN });

export { api };
