import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistsRepository } from './artists.repository';
import { ArtistsEntity } from './artists.entity';

@Injectable()
export class ArtistsService {
    constructor(
        @InjectRepository(ArtistsRepository)
        private readonly artistRepo: ArtistsRepository,
    ){}

    getArtists():Promise<ArtistsEntity[]>{
        return this.artistRepo.getArtists()
    }
}
