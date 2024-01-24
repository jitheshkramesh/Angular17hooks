import { Component, Input, OnChanges, SimpleChanges, SimpleChange, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked {

 



  @Input() myCounter!: number;
  @Input() secondValue!: number
  @Input() numbers!: number[];

  public changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change: SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      this.changeLog.push(
        `ngonChanges ${propName}: currentValue = ${current} , previous = ${previous} , firstChange = ${change.firstChange}`
      );
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.changeLog.push('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    this.changeLog.push(`ngDoCheck : ${this.numbers}`);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.changeLog.push('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.changeLog.push('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.changeLog.push('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    this.changeLog.push('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.changeLog.push('ngOnDestroy');
  }


}
