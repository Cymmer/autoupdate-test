import { useEffect } from 'react';

import { MixpanelTrackService } from '../services';

const useMixpanelTrack = ({ body }) => {
  useEffect(() => {
    if (body) {
      MixpanelTrackService.create({ body });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMixpanelTrack;
