import { Ilust } from "./Ilust";
import { MassSts } from "src/enum/massSts";

export class IlustLogicPuzzle {
  title: string;

  ilust: Ilust;

  colums: number[][];

  rows: number[][];

  answer(answer: Ilust): boolean {
    const length = this.ilust.length;

    for (let row = 0; row < length; row++) {
      for (let column = 0; column < length; column++) {
        if (
          this.ilust[row][column] === MassSts.Black &&
          answer[row][column] !== MassSts.Black
        ) {
          return false;
        } else if (
          this.ilust[row][column] !== MassSts.Black &&
          answer[row][column] === MassSts.Black
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
