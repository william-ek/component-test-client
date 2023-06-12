import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx'

import { TestableComponent } from '../testablecomponents/testablecomponent.model';
import { TestableComponentDto} from '../testablecomponents/testablecomponents.dto'

@Injectable()
export class TestablecomponentsrepositoryService {

  constructor(private http: Http) {}

  postComponent(component: TestableComponent) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://1fdb5523-15a9-4e6e-8e92-329aae154c6e.mock.pstmn.io/component', component, {headers: headers})
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  getComponents() {
    return this.http.get('http://1fdb5523-15a9-4e6e-8e92-329aae154c6e.mock.pstmn.io/component')
    .map(
      (response: Response) => {
        const dto: TestableComponentDto = response.json();
        return dto.items;
      }
    );
  }
}
