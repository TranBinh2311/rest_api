import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common"
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { checkValid } from "./appointment.entity";

@Injectable()
export class ValidationPipe extends checkValid implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        if (value instanceof Object && this.isEmpty(value)) {
            throw new HttpException(
                'Validation failed: No body submitted',
                HttpStatus.BAD_REQUEST,
            );
        }

        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }


        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        const today = new Date().valueOf();
        const startDate = Date.parse(value.startTime)
        const endDate = Date.parse(value.endTime)
        
        if (errors.length > 0) {
            throw new HttpException(
                `Validation failed: ${this.formatErrors(errors)}`,
                HttpStatus.BAD_REQUEST,
            );
        }
        
            
        
        return value;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }

    private formatErrors(errors: any[]) {


        return errors.map(err => {
            for (let property in err.constraints) {
                return err.constraints[property];
            }
        }).join(',  ');
    }

    private isEmpty(value: any) {


        if (Object.keys(value).length > 0) {
            return false;
        }
        return true;
    }

    private check (errors: any[], message: string) {

        errors.map( err =>{
            for (let property in err.constraints) {
                return err.constraints[property] = message;
            }
        })
    }
    
}