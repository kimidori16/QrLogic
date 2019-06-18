export class ArrayUtils {
  public static createArr<T>(length: number, defaultVal?: T): T[] {
    const ret: T[] = [];
    for (let i = 0; i < length; i++) {
      ret.push(defaultVal);
    }
    return ret;
  }

  public static transpose<T>(arr: T[][]): T[][] {
    const ret: T[][] = [];
    arr.forEach((v, i) => {
      v.forEach((val, j) => {
        if (ret.length < j + 1) {
          ret.push([]);
        }
        ret[j][i] = arr[i][j];
      });
    });

    return ret;
  }

  public static reverseInnerArr<T>(arr: T[][]): T[][] {
    const ret: T[][] = [];
    arr.forEach(v => {
      const retArr = [];
      for (let i = v.length - 1; i >= 0; i--) {
        retArr.push(v[i]);
      }
      ret.push(retArr);
    });
    return ret;
  }

  public static toSameLength<T>(arr: T[][], dafaultVal: T) {
    const maxLength = this.calcMaxLength(arr);

    const ret = [];
    arr.forEach(v => {
      const retArr = [];
      for (let i = 0; i < maxLength; i++) {
        if (v.length > i) {
          retArr.push(v[i]);
        } else {
          retArr.push(dafaultVal);
        }
      }
      ret.push(retArr);
    });

    return ret;
  }

  public static calcMaxLength<T>(arr: T[][]) {
    let maxLength = 0;
    arr.forEach(v => {
      if (v.length > maxLength) {
        maxLength = v.length;
      }
    });
    return maxLength;
  }
}
