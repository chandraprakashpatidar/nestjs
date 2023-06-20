"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DeviceController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
//import{addNumbers} from 'my-module/mymodule'
var mymodule_1 = require("my-module/mymodule");
var DeviceController = /** @class */ (function () {
    function DeviceController(DeviceService) {
        this.DeviceService = DeviceService;
    }
    DeviceController.prototype.getdeviceById = function (response, orgid) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = mymodule_1.addNumbers(5, 3);
                    console.log(result);
                    /* console.log(orgid, 'orgid12');
                     const datadevice = await this.DeviceService.getdeviceById(orgid);
                     return response.status(HttpStatus.OK).json({
                       message: 'device found successfully',
                       data: datadevice,
                     });*/
                }
                catch (err) {
                    return [2 /*return*/, response.status(common_1.HttpStatus.BAD_REQUEST).json({
                            statuscode: 400,
                            message: 'Error',
                            err: 'Bad request'
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    DeviceController.prototype.getAlldeviceByorgId = function (response, id) {
        return __awaiter(this, void 0, Promise, function () {
            var device, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id, 'orgid');
                        return [4 /*yield*/, this.DeviceService.getAlldeviceByorgId(id)];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.OK).json({
                                message: 'device found successfully',
                                data: device
                            })];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.BAD_REQUEST).json({
                                statuscode: 400,
                                message: 'Error',
                                err: 'Bad request'
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeviceController.prototype.getAlldevicelocationBydeviceId = function (response, deviceid) {
        return __awaiter(this, void 0, Promise, function () {
            var device, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(deviceid, 'orgid');
                        return [4 /*yield*/, this.DeviceService.getAlldevicelocationBydeviceId(deviceid)];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.OK).json({
                                message: 'device locations found successfully',
                                data: device
                            })];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.BAD_REQUEST).json({
                                statuscode: 400,
                                message: 'Error',
                                err: 'Bad request'
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeviceController.prototype.getAlldevicenameByorgId = function (response, deviceid, limit) {
        return __awaiter(this, void 0, Promise, function () {
            var device, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(deviceid, 'orgid');
                        return [4 /*yield*/, this.DeviceService.getAlldevicenameBydeviceId(deviceid, limit)];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.OK).json({
                                message: 'device locations found successfully',
                                data: device
                            })];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.BAD_REQUEST).json({
                                statuscode: 400,
                                message: 'Error',
                                err: 'Bad request'
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DeviceController.prototype.Devicepauseandunpause = function (response, id, 
    //@Query('limist') limits:string,
    datadetails) {
        return __awaiter(this, void 0, Promise, function () {
            var device, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id, 'deviceid');
                        console.log(datadetails, "data");
                        return [4 /*yield*/, this.DeviceService.Devicepauseandunpause(id, datadetails)];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.OK).json({
                                message: 'Device state updated successfully',
                                data: device
                            })];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, response.status(common_1.HttpStatus.BAD_REQUEST).json({
                                statuscode: 400,
                                message: 'Error',
                                err: 'Bad request'
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiOperation({ summary: 'Get orgid by ID' }),
        swagger_1.ApiResponse({ status: 200, description: 'device found successfully' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad request' }),
        __param(0, common_1.Res()), __param(1, common_1.Param('id'))
    ], DeviceController.prototype, "getdeviceById");
    __decorate([
        common_1.Get(':id/id'),
        swagger_1.ApiOperation({ summary: 'Get all  device by  orgid' }),
        swagger_1.ApiResponse({ status: 200, description: 'device found successfully' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad request' }),
        __param(0, common_1.Res()), __param(1, common_1.Param('id'))
    ], DeviceController.prototype, "getAlldeviceByorgId");
    __decorate([
        common_1.Get(':id/location'),
        swagger_1.ApiOperation({ summary: 'Get all  device location by  decvice id' }),
        swagger_1.ApiResponse({ status: 200, description: 'device location found successfully' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad request' }),
        __param(0, common_1.Res()), __param(1, common_1.Param('id'))
    ], DeviceController.prototype, "getAlldevicelocationBydeviceId");
    __decorate([
        common_1.Get(':id/name'),
        swagger_1.ApiOperation({ summary: 'Get all  device name by  decvice id' }),
        swagger_1.ApiResponse({ status: 200, description: 'device name found successfully' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad request' }),
        __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Query('limits'))
    ], DeviceController.prototype, "getAlldevicenameByorgId");
    __decorate([
        common_1.Post(':id/state'),
        swagger_1.ApiOperation({ summary: 'Pause or Unpause Device Data by device id' }),
        swagger_1.ApiResponse({ status: 200, description: 'Device state updated successfully' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad request' }),
        __param(0, common_1.Res()),
        __param(1, common_1.Param('id')),
        __param(2, common_1.Body())
    ], DeviceController.prototype, "Devicepauseandunpause");
    DeviceController = __decorate([
        common_1.Controller('device'),
        swagger_1.ApiTags('device')
    ], DeviceController);
    return DeviceController;
}());
exports.DeviceController = DeviceController;
