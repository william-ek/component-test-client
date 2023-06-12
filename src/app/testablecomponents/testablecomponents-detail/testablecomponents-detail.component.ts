import { Component, OnInit } from '@angular/core';
import { TestableComponent } from '../testablecomponent.model';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { TestablecomponentsService } from '../testablecomponents.service';

@Component({
  selector: 'app-testablecomponents-detail',
  templateUrl: './testablecomponents-detail.component.html',
  styleUrls: ['./testablecomponents-detail.component.css']
})
export class TestablecomponentsDetailComponent implements OnInit {

  constructor(private componentService: TestablecomponentsService) { }

  onSubmit(form: NgForm) {

    console.log(form.form.value.componentData);

    const conponent: TestableComponent = new TestableComponent(null,
       form.form.value.componentData.serialNumber,
       form.form.value.componentData.type,
       form.form.value.componentData.testDate,
       form.form.value.componentData.testName,
       form.form.value.componentData.testVersion,
       form.form.value.componentData.passed,
       true,
       true
      )

    const response = this.componentService.addComponent(conponent);

    console.log(response);

  }

  ngOnInit() {
  }

}
