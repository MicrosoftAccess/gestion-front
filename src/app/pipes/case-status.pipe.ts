import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'caseStatus'})
export class CaseStatusPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {

        // return value
        switch(value){
            case 'APPROVED':
                return 'Aprobado'
            case 'REJECTED':
                return 'Rechazado'
            case 'UNSOLVED':
               return 'En espera'
            case 'SOLVED':
                return 'Resuelto'
            default:
                return 'En espera'
        }
    }
}
