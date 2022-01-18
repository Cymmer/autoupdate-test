import axios from 'axios';
import { isProduction } from './config';

export const BASE_URL = '/v1/mixpanel-track/';

const MixpanelTrackService = {
  create: isProduction() ? ({ body }) => axios.post(BASE_URL, body) : () => {},
};

export default MixpanelTrackService;
