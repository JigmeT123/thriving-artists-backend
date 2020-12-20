import { EntityRepository, Repository } from 'typeorm';
import { ArtistsEntity } from './artists.entity';

@EntityRepository(ArtistsEntity)
export class ArtistsRepository extends Repository<ArtistsEntity> {}
