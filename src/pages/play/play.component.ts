import { Component, OnInit, ViewChild } from "@angular/core";
import { IlustLogicPuzzle } from "src/types/ilustLogicPuzzle";
import { HttpClient } from "@angular/common/http";
import { IlustLogicFactory } from "src/types/ilustLogicFactory";
import { IlustLogicComponent } from "src/components/ilust-logic/ilust-logic.component";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"]
})
export class PlayComponent implements OnInit {
  @ViewChild(IlustLogicComponent, { static: false })
  ilustLogicComp: IlustLogicComponent;

  puzzle: IlustLogicPuzzle;

  loaded: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("assets/puzzle.json").subscribe(data => {
      this.puzzle = IlustLogicFactory.restore(data);
      this.loaded = true;
    });
  }

  onClickAnswer() {
    this.ilustLogicComp.checkAnswer();
  }
}
