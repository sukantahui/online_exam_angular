import { Component } from '@angular/core';

@Component({
  selector: 'app-python-tutorial',
  templateUrl: './python-tutorial.component.html',
  styleUrls: ['./python-tutorial.component.scss']
})
export class PythonTutorialComponent {
  isPython=false;
  onClickPython(){
    this.isPython=true;
  }
}
