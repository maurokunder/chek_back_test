import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransferDTO } from './dto/transfer.dto';
import { TransferService } from './transfer.service';

@Controller('api/v1/')
export class TransferController {
    constructor(private readonly transferService: TransferService) {}

    @Post('transfer')
    create(@Body() recipientDTO: TransferDTO) {
        return this.transferService.create(recipientDTO);
    }

    @Get('history-transfers')
    findAll() {
        return this.transferService.findAll();
    }


}
