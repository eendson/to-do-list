import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck{

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('List') || '[]');

  constructor() { }

  ngDoCheck() {
    this.setLocalStorage();
  }

  showModal: boolean = false;

  public confirmaDeletAll() {
    this.taskList= [];
    this.showModal = false;
  }
  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllItens() {
    this.showModal = true;
  }

  public validationInput(event: string, index: number) {
    if(!event.length) {
      this.deleteItem(index);
    }
  }

  public setEmitTaskItem(event: string) {
    this.taskList.push({task: event, checked: false})
  }

  public setLocalStorage() {

    if(this.taskList) {
      this.taskList.sort(()=> (this.taskList[0].checked ? -1 : 1));
      localStorage.setItem('List', JSON.stringify(this.taskList));
    }

  }
}
