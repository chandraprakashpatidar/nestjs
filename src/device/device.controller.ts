import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
//import { UsersService } from './users.service';
import { DeviceService } from './device.service';
import { DeviceStateDTO } from 'src/DTO/datapause';
@Controller('device')
@ApiTags('device')
export class DeviceController {
  constructor(private readonly DeviceService: DeviceService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get orgid by ID' })
  @ApiResponse({ status: 200, description: 'device found successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async getdeviceById(@Res() response, @Param('id') orgid: string): Promise<any> {
    try {
      console.log(orgid, 'orgid12');
      const datadevice = await this.DeviceService.getdeviceById(orgid);
      return response.status(HttpStatus.OK).json({
        message: 'device found successfully',
        data: datadevice,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statuscode: 400,
        message: 'Error',
        err: 'Bad request',
      });
    }
  }


  @Get(':id/id')
  @ApiOperation({ summary: 'Get all  device by  orgid' })
  @ApiResponse({ status: 200, description: 'device found successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async getAlldeviceByorgId(@Res() response, @Param('id') id: string): Promise<any> {
    try {
      console.log(id, 'orgid');
      const device = await this.DeviceService.getAlldeviceByorgId(id);
      return response.status(HttpStatus.OK).json({
        message: 'device found successfully',
        data: device,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statuscode: 400,
        message: 'Error',
        err: 'Bad request',
      });
    }
  }




  @Get(':id/location')
  @ApiOperation({ summary: 'Get all  device location by  decvice id' })
  @ApiResponse({ status: 200, description: 'device location found successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async getAlldevicelocationBydeviceId(@Res() response, @Param('id')  deviceid: string): Promise<any> {
    try {
      console.log(deviceid, 'orgid');
      const device = await this.DeviceService.getAlldevicelocationBydeviceId(deviceid);
      return response.status(HttpStatus.OK).json({
        message: 'device locations found successfully',
        data: device,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statuscode: 400,
        message: 'Error',
        err: 'Bad request',
      });
    }
  }



  @Post(':id/state')
@ApiOperation({ summary: 'Pause or Unpause Device Data by device id' })
@ApiResponse({ status: 200, description: 'Device state updated successfully' })
@ApiResponse({ status: 400, description: 'Bad request' })
async Devicepauseandunpause(
  @Res() response,
  @Param('id') id: string,
  @Body() datadetails: DeviceStateDTO
): Promise<any> {
  try {
    console.log(id, 'deviceid');
    console.log(datadetails, "data");
    const device = await this.DeviceService.Devicepauseandunpause(id, datadetails);
    return response.status(HttpStatus.OK).json({
      message: 'Device state updated successfully',
      data: device,
    });
  } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      statuscode: 400,
      message: 'Error',
      err: 'Bad request',
    });
  }
}
}





