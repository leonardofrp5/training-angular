import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-section-input',
  templateUrl: './section-input.component.html',
  styleUrls: ['./section-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SectionInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SectionInputComponent),
      multi: true,
    }
  ]
})
export class SectionInputComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() myLabel;
  @Input() typeInput;
  @Input() myTextValue = ''
  fcontrol: FormControl;
  messageAlert: string = 'Campo obligatorio'

  onChange = (_: any) => {}
  onTouch = () => { }

  ngOnInit() {}

  onBlur(){
    this.onTouch()
  }

  get isValid () {
    return !this.fcontrol.valid && this.fcontrol.touched;
  }

  handleChange(target) {
    this.onChange(target.target.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.myTextValue = value || '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  validate(f: FormControl) {
    this.fcontrol = f;
  }

}
