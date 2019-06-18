import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";
import { MassSts } from "src/enum/massSts";

@Component({
  selector: "app-ilust-mass",
  templateUrl: "./ilust-mass.component.html",
  styleUrls: ["./ilust-mass.component.scss"]
})
export class IlustMassComponent implements OnChanges {
  @Input()
  sts: MassSts = MassSts.White;

  styles = {
    black: false,
    x: false
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.changeStyle();
  }

  changeStyle() {
    this.styles.black = this.sts === MassSts.Black;
    this.styles.x = this.sts === MassSts.X;
  }
}
