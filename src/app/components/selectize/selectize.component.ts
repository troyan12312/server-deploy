import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.scss']
})
export class SelectizeComponent implements AfterViewInit {


  @ViewChild('input',{static:false}) input: ElementRef;
  public posts$;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event['target'].value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe(results => {
      this.posts$ = results;
    });
  }
}
