import { EntityRepository, Repository } from 'typeorm';
import { ArtistsEntity } from './artists.entity';
import { CreateArtistDto } from './dto/create-artist.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(ArtistsEntity)
export class ArtistsRepository extends Repository<ArtistsEntity> {

    async createArtists(createArtists: CreateArtistDto): Promise<ArtistsEntity>{
        const {artistName, artistInsta, artistWp, artistEmail, artistBio, art1Name,artDec1,art1Price,art2Name,artDec2,art2Price,art3Name,artDec3,art3Price,art4Name,artDec4,art4Price,art5Name,artDec5,art5Price,sold} = createArtists;

        const artists = new ArtistsEntity();
        artists.artistInsta = artistInsta || "";
        artists.artistName = artistName;
        artists.artistWp = artistWp  || "";
        artists.artistEmail = artistEmail || "";
        artists.artistBio = artistBio;
        artists.art1Name = art1Name;
        artists.artDec1 = artDec1;
        artists.art1Price = art1Price;
        artists.artDec2 = artDec2 || "";
        artists.art2Name = art2Name || "";
        artists.art2Price = art2Price || 0;
        artists.art3Name = art3Name || "";
        artists.artDec3 = artDec3 || "";
        artists.art3Price = art3Price || 0;
        artists.art4Name = art4Name  || "";
        artists.artDec4 = artDec4 || "";
        artists.art4Price = art4Price || 0;
        artists.art5Name = art5Name || "";
        artists.artDec5 = artDec5 || "";
        artists.art5Price = art5Price || 0;
        artists.sold = sold;
        await artists.save()
        return artists;

    }

    async updateArtistSold(id:number):Promise <ArtistsEntity>{
        const artist = await this.findOne(id);
        if(!artist){
            throw new NotFoundException(`The artist with id ${id} is not found`);
        }

        artist.sold = true;
        await artist.save()
        return artist;

    }

    async getArtists():Promise<ArtistsEntity[]>{
        const query = this.createQueryBuilder('artists');
        const artistAll = await query.getMany()
        return artistAll;
    }
    
}
