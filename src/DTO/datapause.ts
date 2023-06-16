import { ApiProperty } from '@nestjs/swagger';

export class DeviceStateDTO {
  @ApiProperty({ example: 'pause', description: 'State of the device' })
  state: string;
}
