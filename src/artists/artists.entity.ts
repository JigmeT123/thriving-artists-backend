import {BaseEntity, PrimaryGeneratedColumn, Column, Entity} from 'typeorm';
@Entity()
export class ArtistsEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    artistName: string;

    @Column()
    artistInsta:string;

    @Column()
    artistWp:string;

    @Column()
    artistEmail:string;

    @Column()
    artistBio:string;

    @Column()
    art1Name:string;
    @Column()
    artDec1:string;
    @Column()
    art1Price:number;

    @Column()
    art2Name:string;
    @Column()
    artDec2:string;
    @Column()
    art2Price:number;


    @Column()
    art3Name:string;
    @Column()
    artDec3:string;
    @Column()
    art3Price:number;


    @Column()
    art4Name:string;
    @Column()
    artDec4:string;
    @Column()
    art4Price:number;


    @Column()
    art5Name:string;
    @Column()
    artDec5:string;
    @Column()
    art5Price:number;
    @Column()
    sold:boolean;

    @Column({type: "json"})
    artPic1: string;
    @Column({type: "json"})
    artPic2: string;
    @Column({type: "json"})
    artPic3: string;
    @Column({type: "json"})
    artPic4: string;
    @Column({type: "json"})
    artPic5: string;

}