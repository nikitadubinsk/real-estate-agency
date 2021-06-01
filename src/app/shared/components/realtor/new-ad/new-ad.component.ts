import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { Subject } from 'rxjs';
import { RealtorService } from 'src/app/shared/services/realtor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss'],
})
export class NewAdComponent implements OnInit {
  newAd = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    floor: new FormControl('', [Validators.required]),
    type_apartament: new FormControl('', [Validators.required]),
    type_ad: new FormControl('', [Validators.required]),
    conveniences: new FormControl(),
    price: new FormControl('', [Validators.required]),
    photo: new FormControl(''),
    developer_id: new FormControl(''),
    realtor_id: new FormControl(localStorage['realtor_id']),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  });
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
  loading = false;

  @ViewChild('fileUpload1', { static: false })
  private fileUpload1?: AngularFileUploaderComponent;

  public error$: Subject<string> = new Subject<string>();
  public success$: Subject<string> = new Subject<string>();

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

  constructor(private realtorService: RealtorService) {}

  ngOnInit(): void {
    this.fileUpload1?.resetFileUpload();
  }

  fileUpload(event: any) {
    this.filename = event.body.filename;
    console.log(this.filename);
  }

  createAd() {
    this.newAd.value.conveniences = this.newAd.value.conveniences.join(', ');
    this.loading = true;
    this.realtorService.geocoding(this.newAd.value.address).subscribe(
      (res) => {
        this.newAd.value.latitude =
          Object.values(
            res
          )[0].GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
            ' '
          )[0];

        this.newAd.value.longitude =
          Object.values(
            res
          )[0].GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
            ' '
          )[1];
        console.log(this.newAd.value.latitude, this.newAd.value.longitude);
        this.newAd.value.photo = this.filename;
        this.realtorService.newAd(this.newAd.value).subscribe(
          () => {
            this.success$.next('Вы успешно добавили новое объявление');
            this.newAd.reset();
            this.loading = false;
          },
          (err) => {
            this.error$.next(err.error);
            this.loading = false;
          }
        );
      },
      (err) => {
        this.error$.next(err.error);
        this.loading = false;
      }
    );
  }
}
