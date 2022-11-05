import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ArithmeticDto } from './profile.interface';

@Controller('profile')
export class ProfileController {
    
    @Get()
    async profile(){
        return { slackUsername: 'agwuekene41', backend: true, age: 20, bio: "Hello, I'm a backend developer" }
    }

    @Post('arithmetic')
    async arithmetic(@Req() req: ArithmeticDto){
        let result:number
        if(req.operation_type == 'addition'){ result = req.x + req.y}
        else if(req.operation_type == 'subtraction'){ result = req.x - req.y}
        else if(req.operation_type == 'multiplication'){ result = req.x * req.y}
        return { slackUsername: 'agwuekene41', result: result, operation_type : req.operation_type}

    }

}
