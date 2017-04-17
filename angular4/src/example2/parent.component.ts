import {Component, QueryList, ViewChildren} from "@angular/core";
import ChildComponent from "./child.component";

@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: './parent.component.html'
})

export default class ParentComponent {
  public logs: Array<string> = ['foo', 'bar', 'baz'];
  public count: number = 0;

  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  private ngAfterViewInit(): void {
    this.count = this.children.length;
  }
}