// axios.provider.ts

import { Provider } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

export const AxiosProvider: Provider = {
  provide: 'AXIOS_INSTANCE_TOKEN',
  useValue: new HttpService(),
};
