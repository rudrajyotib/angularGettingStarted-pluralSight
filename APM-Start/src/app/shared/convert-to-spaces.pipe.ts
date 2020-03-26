import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'convertToSpaces'
})
export class ConvertToSpace implements PipeTransform
{
    transform(value: any, ...args: any[]) {
        
            stringval : String;
            var stringval = new String(value);
            return stringval.replace(args[0],' ').toLowerCase();
            

    }

}