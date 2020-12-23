import { Injectable, NotFoundException } from '@nestjs/common';
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

    createArtists(createArtists: CreateArtistDto, file): Promise<ArtistsEntity>{
        return this.artistRepo.createArtists(createArtists, file);
    }

    async getArtistsById(id:number):Promise<ArtistsEntity>{
        const artist = await this.artistRepo.findOne(id);
        if(!artist){
            throw new NotFoundException(`artists with id ${id} is not found`);
        }
        return artist;
    }
    updateArtistSold(id:number):Promise<ArtistsEntity>{
        return this.artistRepo.updateArtistSold(id);
    }

}
