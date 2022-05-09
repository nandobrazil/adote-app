import { Pipe, PipeTransform } from '@angular/core';
import { UtilHelper } from '../shared/utils/utils';

@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {

    transform(value: string, format: string) {
        return UtilHelper.format(value, format);
    }
}
