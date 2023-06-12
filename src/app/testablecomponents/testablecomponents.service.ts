import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'
import { Subject } from 'rxjs/Subject';
import { TestableComponent } from './testablecomponent.model'
import { TestablecomponentsrepositoryService } from '../shared/testablecomponentsrepository.service';
import { Body } from '../../../node_modules/@angular/http/src/body';

@Injectable()
export class TestablecomponentsService {

    componentChanged = new Subject<TestableComponent[]>();
  
    private components: TestableComponent[] = [];

    private component: TestableComponent;
  
    constructor(private http: Http, private repositoryService: TestablecomponentsrepositoryService) {}
  
    setComponent(component: TestableComponent) {
      this.component = component;
      this.componentChanged.next(this.components.slice());
    }

    setComponents(components: TestableComponent[]) {
      this.components = components;
      this.componentChanged.next(this.components);
    }

    refreshComponents() {
      this.repositoryService.getComponents()
      .subscribe(
        (components: TestableComponent[]) => {
          this.setComponents(components);
          console.log(components);
        },
        (error) => console.log("Error: " + error)
      )
    }
  
    getComponents() {
      return this.components;
    }
  
    getComponent(index: number) {
      return this.components[index];
    }
  
    addComponent(component: TestableComponent) {
      this.repositoryService.postComponent(component)
      .subscribe(
        (data: any) => this.setComponent(data),
      );

      return component;
    }
  
    updateComponent(index: number, newComponent: TestableComponent) {
      this.components[index] = newComponent;
      this.componentChanged.next(this.components.slice());
    }
  
    delete(index: number) {
      this.components.splice(index, 1);
      this.componentChanged.next(this.components.slice());
    }
  }
  
