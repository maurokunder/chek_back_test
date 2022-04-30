import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransferDTO } from './dto/transfer.dto';
import { TransferService } from './transfer.service';

@ApiTags('transfers')
@Controller('api/v1/')
export class TransferController {
    constructor(private readonly transferService: TransferService) {}

    @Post('transfer')
    @ApiOperation({summary: 'Create new transfer'})
    create(@Body() recipientDTO: TransferDTO) {
        return this.transferService.create(recipientDTO);
    }

    @Get('history-transfers')
    @ApiOperation({summary: 'Get all transfers'})
    findAll() {
        return this.transferService.findAll();
    }


}
