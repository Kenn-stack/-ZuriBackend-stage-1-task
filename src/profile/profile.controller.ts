import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
    
    @Get()
    async profile(){
        return { slackUsername: 'Kenn-stack', backend: true, age: 20, bio: "Hello, I'm a backend developer" }
    }
}
