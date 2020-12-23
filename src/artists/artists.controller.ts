import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Param, ParseIntPipe, Patch, UseInterceptors, UploadedFiles} from '@nestjs/common';
import {ArtistsService} from './artists.service';
import { ArtistsEntity } from './artists.entity';
import { CreateArtistDto } from './dto/create-artist.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {v4} from 'uuid';
import path = require('path');

export const storage = {
    storage: diskStorage({
        destination: './uploads/artImage',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + v4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

@Controller('artists')
export class ArtistsController {
    constructor(
        private readonly artistService: ArtistsService,
    ){}

    @Get()
    getArtist():Promise<ArtistsEntity[]>{
        return this.artistService.getArtists()
    }

    @Post()
    @UseInterceptors(FilesInterceptor('art[]',5,storage))
    @UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true } }))
    createArtists(@UploadedFiles() file, @Body() createDto: CreateArtistDto){
        return this.artistService.createArtists(createDto, file);
    }

    @Get(':id')
    getArtistById(@Param('id',ParseIntPipe) id:number):Promise<ArtistsEntity>{
        return this.artistService.getArtistsById(id);
    }    

    @Patch(':id')
    updateArtistSold(@Param('id', ParseIntPipe) id:number):Promise<ArtistsEntity>{
        return this.artistService.updateArtistSold(id)
    }

}
