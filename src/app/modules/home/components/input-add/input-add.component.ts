import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-add',
  templateUrl: './input-add.component.html',
  styleUrls: ['./input-add.component.scss']
})
export class InputAddComponent {
  @Output() public emitItemTaskList = new EventEmitter<any>();
  
  public addItemTask: string = "";
  constructor(){}

  public submitItemTask() {
    this.addItemTask = this.addItemTask.trim();

    if(this.addItemTask){
      this.emitItemTaskList.emit(this.addItemTask);
      this.addItemTask = '';
    } else {
      alert("Por favor, digite um valor válido!")
    } 
  }

  ngOnit(): void {}

}
