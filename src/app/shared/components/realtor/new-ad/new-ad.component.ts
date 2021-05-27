import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss'],
})
export class NewAdComponent implements OnInit {
  readonly type_apartament = ['Квартира', 'Студия', 'Частный дом'];
  readonly type_ad = ['Продажа', 'Аренда'];
  readonly conveniences = [
    'Мебель в комнатах',
    'Кухонная мебель',
    'Холодильник',
    'Стиральная машина',
    'Интернет',
    'Телевизор',
    'Посудомоечная машина',
    'Телефон',
    'Душевая кабина',
    'Кондиционер',
  ];
  filename = '';

  @ViewChild('fileUpload1', { static: false })
  private fileUpload1?: AngularFileUploaderComponent;

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png',
    uploadAPI: {
      url: environment.urlApi + '/upload-photo',
    },
    replaceTexts: {
      selectFileBtn: 'Выберите файл',
      resetBtn: 'Удалить',
      uploadBtn: 'Загрузить',
      attachPinBtn: 'Прикрепите файл',
      afterUploadMsg_success: 'Успешно загружено!',
      afterUploadMsg_error: 'Загрузка прервана!',
    },
    theme: 'dragNDrop',
  };

  constructor() {}

  ngOnInit(): void {
    this.fileUpload1?.resetFileUpload();
  }

  fileUpload(event: any) {
    this.filename = event.body.filename;
  }
}
