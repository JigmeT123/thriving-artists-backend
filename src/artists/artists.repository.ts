import { EntityRepository, Repository } from 'typeorm';
import { ArtistsEntity } from './artists.entity';
import { CreateArtistDto } from './dto/create-artist.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(ArtistsEntity)
export class ArtistsRepository extends Repository<ArtistsEntity> {

    async createArtists(createArtists: CreateArtistDto, file): Promise<ArtistsEntity>{
        const {artistName, artistInsta, artistWp, artistEmail, artistBio, art1Name,artDec1,art1Price,art2Name,artDec2,art2Price,art3Name,artDec3,art3Price,art4Name,artDec4,art4Price,art5Name,artDec5,art5Price,sold} = createArtists;
        const artists = new ArtistsEntity();
        artists.artistInsta = artistInsta || "There is no data";
        artists.artistName = artistName;
        artists.artistWp = artistWp  || "There is no data";
        artists.artistEmail = artistEmail || "There is no data";
        artists.artistBio = artistBio;
        artists.art1Name = art1Name;
        artists.artDec1 = artDec1;
        artists.art1Price = art1Price;
        artists.artDec2 = artDec2 || "There is no data";
        artists.art2Name = art2Name || "There is no data";
        artists.art2Price = art2Price || 0;
        artists.art3Name = art3Name || "There is no data";
        artists.artDec3 = artDec3 || "There is no data";
        artists.art3Price = art3Price || 0;
        artists.art4Name = art4Name  || "There is no data";
        artists.artDec4 = artDec4 || "There is no data";
        artists.art4Price = art4Price || 0;
        artists.art5Name = art5Name || "There is no data";
        artists.artDec5 = artDec5 || "There is no data";
        artists.art5Price = art5Price || 0;
        artists.sold = sold;
        artists.artPic1 = file[0] || "There is no data";
        artists.artPic2 = file[1] || "There is no data";
        artists.artPic3 = file[2] || "There is no data";
        artists.artPic4 = file[3] || "There is no data";
        artists.artPic5 = file[4] || "There is no data";
        await artists.save();
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
