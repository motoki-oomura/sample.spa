import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import ParentComponent from "./parent.component";
import ChildComponent from "./child.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ParentComponent, ChildComponent ],
  bootstrap: [ ParentComponent ]
})

export default class AppModule {}