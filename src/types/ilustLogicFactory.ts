import { Ilust } from "./Ilust";
import { IlustLogicPuzzle } from "./ilustLogicPuzzle";
import { MassSts } from "src/enum/massSts";
import { ArrayUtils } from "src/utils/ArrayUtils";

export class IlustLogicFactory {
  public static restore(puzzleJson: any): IlustLogicPuzzle {
    const puzzle = new IlustLogicPuzzle();
    puzzle.title = puzzleJson.title;
    puzzle.ilust = puzzleJson.ilust;
    puzzle.rows = puzzleJson.rows;
    puzzle.colums = puzzleJson.colums;

    return puzzle;
  }

  public static create(title: string, ilust: Ilust): IlustLogicPuzzle {
    const puzzle = new IlustLogicPuzzle();
    puzzle.title = title;
    puzzle.ilust = ilust;
    puzzle.rows = this.generateRows(ilust);
    puzzle.colums = this.generateColumns(ilust);

    return puzzle;
  }

  private static generateRows(ilust: Ilust): number[][] {
    const rows: number[][] = [];

    let cnt = 0;
    ilust.forEach(row => {
      const arr: number[] = [];
      row.forEach(mass => {
        if (mass === MassSts.Black) {
          cnt++;
        } else {
          if (cnt > 0) {
            arr.push(cnt);
            cnt = 0;
          }
        }
      });

      if (cnt > 0) {
        arr.push(cnt);
        cnt = 0;
      }

      if (arr.length === 0) {
        arr.push(0);
      }

      rows.push(arr);
    });

    return rows;
  }

  private static generateColumns(ilust: Ilust): number[][] {
    const columns: number[][] = [];
    ilust.forEach(row => {
      columns.push([]);
    });

    let counter = ArrayUtils.createArr(ilust.length, 0);
    ilust.forEach(row => {
      row.forEach((mass, column) => {
        if (mass === MassSts.Black) {
          counter[column] = counter[column] + 1;
        } else {
          if (counter[column] > 0) {
            columns[column].push(counter[column]);
            counter[column] = 0;
          }
        }
      });
    });

    counter.forEach((cnt, column) => {
      if (cnt > 0) {
        columns[column].push(cnt);
      }
    });
    columns.forEach(arr => {
      if (arr.length === 0) {
        arr.push(0);
      }
    });

    return columns;
  }
}
