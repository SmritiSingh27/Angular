export class ItemDetails{
    Name : string;
    City : string
    Description : string;
    imagePath : string;

    constructor( name: string, city : string, desc: string,imagePath: string){
        this.Name= name;
        this.City= city;
        this.Description = desc;
        this.imagePath = imagePath;
    }
}