import { Controller, Get } from '@nestjs/common';
import {ArtistsService} from './artists.service';
import { ArtistsEntity } from './artists.entity';

@Controller('artists')
export class ArtistsController {
    constructor(
        private readonly artistService: ArtistsService,
    ){}

    @Get()
    getArtist():Promise<ArtistsEntity[]>{
        return this.artistService.getArtists()
    }

    
}
