import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MassSts } from 'src/enum/massSts';
import * as qrcode from 'qrcode-generator';
import * as encoding from 'encoding-japanese';
import { Ilust } from 'src/types/Ilust';
import { IlustLogicFactory } from 'src/types/ilustLogicFactory';
import { FileUtils } from 'src/utils/fileUtils';

@Component({
  selector: 'app-create-qr-code',
  templateUrl: './create-qr-code.component.html',
  styleUrls: ['./create-qr-code.component.scss']
})
export class CreateQrCodeComponent implements AfterViewInit {
  @ViewChild("qrcodeArea", { static: true })
  qrcodeArea: ElementRef;

  text: string = "";

  readonly typeNumber: TypeNumber = 4;

  readonly errorCorrectionLevel: ErrorCorrectionLevel = 'L';

  qr: QRCode;

  constructor() { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.createQRcode();
  }

  createQRcode() {
    this.qr = qrcode(0, 'L');
    this.qr.addData(encoding.convert(this.text, 'SJIS'));
    this.qr.make();

    this.qrcodeArea.nativeElement.innerHTML = this.qr.createImgTag(5, 5);
  }

  onClickCreate() {
    const title = window.prompt("タイトルを入力してください。");
    if (title === null || title === "") {
      return;
    }

    const cnt = this.qr.getModuleCount();

    const ilust: Ilust = [];
    for (let i = 0; i < cnt; i++) {
      const arr: MassSts[] = [];
      for (let j = 0; j < cnt; j++) {
        if (this.qr.isDark(i, j)) {
          arr.push(MassSts.Black);
        } else {
          arr.push(MassSts.White);
        }
      }
      ilust.push(arr);
    }

    const puzzle = IlustLogicFactory.create(title, ilust);

    FileUtils.save(JSON.stringify(puzzle), title + '.json', 'json');

  }

}
