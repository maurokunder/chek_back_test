import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecipientDTO } from './dto/recipient.dto';
import { RecipientService } from './recipient.service';

@Controller('api/v1/')
export class RecipientController {
    constructor(private readonly recipientService: RecipientService) {}
    @Post('new_recipient')
    create(@Body() recipientDTO: RecipientDTO) {
        return this.recipientService.create(recipientDTO);
    }

    @Get('all-recipients')
    findAll() {
        return this.recipientService.findAll();
    }

}
