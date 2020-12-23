import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ArtistsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    MulterModule.register({
      dest: '/uploads',
    })
  ],
})
export class AppModule {}
