import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  //in order to output from a component 
  //we need to output an event emitter
  //define what kind of data will be emitted
  @Output() onServerCreated = new EventEmitter<{name:string, content:string}>();
  @Output() onBlueprintCreated = new EventEmitter<{name:string, content:string}>();

  //newServerName = '';
  //newServerContent = '';

  createServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.onServerCreated.emit({name: nameInput.value, content:contentInput.value});
  }

  createBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.onBlueprintCreated.emit({name: nameInput.value, content: contentInput.value});
  }
}
