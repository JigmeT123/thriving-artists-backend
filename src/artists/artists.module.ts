import { Module } from '@nestjs/common';
import { ArtistsController } from './artists.controller';
import { ArtistsService } from './artists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistsRepository } from './artists.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistsRepository])],
  controllers: [ArtistsController],
  providers: [ArtistsService]
})
export class ArtistsModule {}
