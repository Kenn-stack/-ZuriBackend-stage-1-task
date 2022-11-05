import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ArithmeticDto } from './profile.interface';

@Controller('profile')
export class ProfileController {
    
    @Get()
    async profile(){
        return { slackUsername: 'agwuekene41', backend: true, age: 20, bio: "Hello, I'm a backend developer" }
    }

    @HttpCode(200)
    @Post('arithmetic')
    async arithmetic(@Req() req: Request){
        let result:number
        if(req.body.operation_type == 'addition'){
            return { slackUsername: 'agwuekene41', result: parseInt(req.body.x) + parseInt(req.body.y), operation_type : req.body.operation_type}
        }
        else if(req.body.operation_type == 'subtraction'){ result = parseInt(req.body.x) - parseInt(req.body.y)}
        else if(req.body.operation_type == 'multiplication'){ result = parseInt(req.body.x) * parseInt(req.body.y)}
        return { slackUsername: 'agwuekene41', result: result, operation_type : req.body.operation_type}

    }

}
