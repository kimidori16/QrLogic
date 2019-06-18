import { Component, OnInit, Input } from "@angular/core";
import { IlustLogicPuzzle } from "src/types/ilustLogicPuzzle";
import { Ilust } from "src/types/Ilust";
import { ArrayUtils } from "src/utils/ArrayUtils";
import { MassSts } from "src/enum/massSts";

@Component({
  selector: "app-ilust-logic",
  templateUrl: "./ilust-logic.component.html",
  styleUrls: ["./ilust-logic.component.scss"]
})
export class IlustLogicComponent implements OnInit {
  @Input()
  puzzle: IlustLogicPuzzle;

  answer: Ilust;

  length: number;

  rows: number[][];

  columns: number[][];

  keys: number[];

  hoverRow: number;

  hoverColumn: number;

  completed: boolean = false;

  constructor() {}

  ngOnInit() {
    this.length = this.puzzle.ilust.length;
    this.answer = this.createPaper();

    this.init();
  }

  createPaper(): Ilust {
    const paper: Ilust = [];
    for (let i = 0; i < this.length; i++) {
      paper.push(ArrayUtils.createArr(this.length, MassSts.White));
    }

    return paper;
  }

  init() {
    this.columns = ArrayUtils.transpose(
      ArrayUtils.reverseInnerArr(
        ArrayUtils.toSameLength(
          ArrayUtils.reverseInnerArr(this.puzzle.colums),
          null
        )
      )
    );
    this.rows = ArrayUtils.reverseInnerArr(
      ArrayUtils.toSameLength(
        ArrayUtils.reverseInnerArr(this.puzzle.rows),
        null
      )
    );
  }

  checkAnswer() {
    if (this.puzzle.answer(this.answer)) {
      this.completed = true;
      window.alert("正解！！！\\(・ω・)/");
    } else {
      window.alert("残念。どこか違うよ(´oωo｀)");
    }
  }

  onClickMass(row: number, column: number) {
    const pre = this.answer[row][column];
    if (pre === MassSts.White) {
      this.answer[row][column] = MassSts.Black;
    } else if (pre === MassSts.Black) {
      this.answer[row][column] = MassSts.White;
    } else {
      return;
    }
  }

  onRightClickMass(row: number, column: number) {
    const pre = this.answer[row][column];
    if (pre === MassSts.White) {
      this.answer[row][column] = MassSts.X;
    } else if (pre === MassSts.Black) {
      return false;
    } else {
      this.answer[row][column] = MassSts.White;
    }
    return false;
  }

  onMouseEnterMass(row: number, column: number) {
    this.hoverRow = row;
    this.hoverColumn = column;

    console.log(`hoverRow: ${this.hoverRow} hoverColumn: ${this.hoverColumn}`);
  }

  onMouseLeaveMass() {
    this.hoverRow = null;
    this.hoverColumn = null;
  }

  isHoverColumn(column: number) {
    return this.hoverColumn === column;
  }

  isHoverRow(row: number) {
    return this.hoverRow === row;
  }
}
