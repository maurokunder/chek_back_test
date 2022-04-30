import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RecipientDTO } from './dto/recipient.dto';
import { RecipientService } from './recipient.service';

@ApiTags('recipients')
@Controller('api/v1/')
export class RecipientController {
    constructor(private readonly recipientService: RecipientService) {}
    @Post('new_recipient')
    @ApiOperation({summary: 'Create new recipient'})
    create(@Body() recipientDTO: RecipientDTO) {
        return this.recipientService.create(recipientDTO);
    }

    @Get('all-recipients')
    @ApiOperation({summary: 'Get all recipient'})
    findAll() {
        return this.recipientService.findAll();
    }

}
