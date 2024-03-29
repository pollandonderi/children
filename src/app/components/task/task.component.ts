import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms' 
import { using } from 'rxjs';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  taskList:any[]= [];
  ngOnInit(): void {
    const storedTask = window.localStorage.getItem('task');
    this.taskList = storedTask ? JSON.parse(storedTask) : [];
  }
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })
  constructor(
    private formBuilder: FormBuilder
    ) {}
    addTask(){
      const value = this.newTodoForm.value.todoItem;
      this.taskList.push({id:this.taskList.length, name:value});
      // save to the localstorage using this method
      window.localStorage.setItem('task', JSON.stringify(this.taskList))
      //ends here
      this.newTodoForm.reset();
    }
    completed:boolean =false;
    markDone(value: any) {
      value.completed = !value.completed
      value.completed === true ?
        this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
        this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
    }
    removeTask(i:any){
      this.taskList.splice(i,1)
      window.localStorage.setItem('task', JSON.stringify(this.taskList))
    }

}
