import {IsNotEmpty, IsOptional, IsBoolean, IsInt} from 'class-validator'
export class CreateArtistDto{
    @IsNotEmpty()
    artistName: string;

    @IsOptional()
    artistInsta:string;

    @IsOptional()
    artistWp:string;

    @IsOptional()
    artistEmail:string;

    @IsNotEmpty()
    artistBio:string;

    @IsNotEmpty()
    art1Name:string;
    @IsNotEmpty()
    artDec1:string;
    @IsNotEmpty()
    @IsInt()
    art1Price:number;

    @IsOptional()
    art2Name:string;
    @IsOptional()
    artDec2:string;
    @IsOptional()
    @IsInt()
    art2Price:number;

    @IsOptional()
    art3Name:string;
    @IsOptional()
    artDec3:string;
    @IsOptional()
    @IsInt()
    art3Price:number;

    @IsOptional()
    art4Name:string;
    @IsOptional()
    artDec4:string;
    @IsOptional()
    @IsInt()
    art4Price:number;

    @IsOptional()
    art5Name:string;
    @IsOptional()
    artDec5:string;
    @IsOptional()
    @IsInt()
    art5Price:number;

    @IsNotEmpty()
	@IsBoolean()
    sold:boolean;
}