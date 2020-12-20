import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ArtistsModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
