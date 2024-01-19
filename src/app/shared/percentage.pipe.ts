import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ 
    standalone:true,
    name:'Percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(value: any) {
      return value * 100;
    }

}