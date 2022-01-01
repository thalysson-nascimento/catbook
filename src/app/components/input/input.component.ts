import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  placeholder: string;
  @Input()
  type? = '';
  @Input()
  value: string = null;
  @Output()
  valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange($event: Event):void {
    const target = $event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}
