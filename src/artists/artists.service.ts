import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistsRepository } from './artists.repository';
import { ArtistsEntity } from './artists.entity';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistsService {
    constructor(
        @InjectRepository(ArtistsRepository)
        private readonly artistRepo: ArtistsRepository,
    ){}

    getArtists():Promise<ArtistsEntity[]>{
        return this.artistRepo.getArtists()
    }

    createArtists(createArtists: CreateArtistDto): Promise<ArtistsEntity>{
        return this.artistRepo.createArtists(createArtists);
    }
}
