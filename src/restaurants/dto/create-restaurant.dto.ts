import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { Category } from "../schemas/restaurant.schema";

export class CreateRestaurantDto{
    @IsNotEmpty()
    @IsString()
    readonly name:string;

    @IsNotEmpty()
    @IsString()
    readonly description:string;

    @IsNotEmpty()
    @IsEmail({},{message:'Please enter correct email address'})
    readonly email:string;

    @IsNotEmpty()
    @IsPhoneNumber('IN')
    readonly phoneNo:number;

    @IsNotEmpty()
    @IsString()
    readonly address:string;

    @IsNotEmpty({message:"Please enter correct category"})
    @IsEnum(Category)
    readonly category:Category;
}