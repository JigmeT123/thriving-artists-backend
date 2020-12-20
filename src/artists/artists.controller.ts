import { Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {ArtistsService} from './artists.service';
import { ArtistsEntity } from './artists.entity';
import { CreateArtistDto } from './dto/create-artist.dto';

@Controller('artists')
export class ArtistsController {
    constructor(
        private readonly artistService: ArtistsService,
    ){}

    @Get()
    getArtist():Promise<ArtistsEntity[]>{
        return this.artistService.getArtists()
    }

    @Post()
    @UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true } }))
    createArtists(createDto: CreateArtistDto):Promise<ArtistsEntity>{
        return this.artistService.createArtists(createDto);
    }
    
}
