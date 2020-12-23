import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Param, ParseIntPipe, Patch, UseInterceptors, UploadedFile} from '@nestjs/common';
import {ArtistsService} from './artists.service';
import { ArtistsEntity } from './artists.entity';
import { CreateArtistDto } from './dto/create-artist.dto';
import {FileInterceptor} from '@nestjs/platform-express';

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
    @UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true } }))
    createArtists( @Body() createDto: CreateArtistDto):Promise<ArtistsEntity>{
        return this.artistService.createArtists(createDto);
    }

    @Get(':id')
    getArtistById(@Param('id',ParseIntPipe) id:number):Promise<ArtistsEntity>{
        return this.artistService.getArtistsById(id);
    }    

    @Patch(':id')
    updateArtistSold(@Param('id', ParseIntPipe) id:number):Promise<ArtistsEntity>{
        return this.artistService.updateArtistSold(id)
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(@UploadedFile() file){
        console.log(file); 
    }

}
