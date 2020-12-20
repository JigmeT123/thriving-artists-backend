import { EntityRepository, Repository } from 'typeorm';
import { ArtistsEntity } from './artists.entity';

@EntityRepository(ArtistsEntity)
export class ArtistsRepository extends Repository<ArtistsEntity> {

    async getArtists():Promise<ArtistsEntity[]>{
        const query = this.createQueryBuilder('artists');
        const artistAll = await query.getMany()
        return artistAll;
    }
    
}
