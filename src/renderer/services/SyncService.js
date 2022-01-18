import axios from 'axios';

export const BASE_URL = '/v1/sync';

const SyncService = {
  sync: () => axios.post(BASE_URL),
};

export default SyncService;
