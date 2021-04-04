import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {HttpClient} from '@angular/common/http';

declare var jQuery: any;

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styles: []
})
export class TradeComponent implements OnInit, AfterViewInit {
  formGroup: FormGroup;
  type: string;
  typeJoint: string;
  symbolBalance: string;
  uid: string;
  listOrder: unknown[];
  URL_API_CANCEL = 'https://us-central1-afgpaper-4e165.cloudfunctions.net/cancelOrder';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private afs: AngularFirestore,
              private httpClient: HttpClient) {
    this.createForm();
    this.symbolBalance = this.getSymbolBalance();
    this.uid = 'TQugs66otZ775JSMyNnNoAZxKrVMFFuQXH1';
    this.getListOrder();
  }

  ngOnInit(): void {

  }

  async ngAfterViewInit(): Promise<void> {
    // await this.loadScript('/assets/js/vendor/jquery.min.js');
    // await this.loadScript('/assets/js/vendor/jquery.validate.min.js');
    // await this.loadScript('/assets/js/vendor/jquery.circlechart.js');
    // await this.loadScript('/assets/js/common.js');
    await this.loadScript('/assets/js/select-custom.js');
  }

  loadScript(scriptUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      uid: [null],
      amount: [null],
      symbolBalance: [],
      typeJoint: [''],
      type: [null],
      price: [null]
    });
  }

  onSubmit(): void {
    this.getFormValue(jQuery);
    this.formGroup.patchValue({
      uid: this.uid,
      type: this.type,
      symbolBalance: this.symbolBalance,
      typeJoint: this.typeJoint
    });
    this.afs.collection('ordering').doc(this.uid).set(this.formGroup.value).then((data) => {
      console.log(data);
    })
      .catch((error) => {
        console.error(error);
      });
  }

  getSymbolBalance(): string {
    return 'balanceAfd';
  }

  checkBalance(): boolean {
    this.afs.doc('users/' + this.uid).valueChanges().subscribe(data => {
    });
    return true;
  }

  getFormValue($): void {
    const $exchange = $('.exchange');
    const classActive = $('.exchange__tab--selected');
    this.type = classActive.data('action');
    this.typeJoint = $exchange.find('[name="typeJoint"]').val();
  }

  getListOrder(): void {
    this.afs.collection('orders', ref => ref.where('uid', '==', this.uid)
      .where('type', '==', 'sell')
      .orderBy('created', 'desc')).valueChanges().subscribe(data => {
      this.listOrder = data;
    });
    this.afs.collection('orders', ref => ref.where('uid', '==', this.uid)
      .where('type', '==', 'buy')
      .orderBy('created', 'desc')).valueChanges().subscribe(data => {
      this.listOrder = this.listOrder.concat(data);
    });
  }

  cancel(orderId: string): void {
    this.afs.doc('orders/' + orderId).update({
      status: 'cancel'
    }).then(result => {
      const obj = {
        orderId
      };
      this.httpClient.get(this.URL_API_CANCEL, {params: obj}).subscribe(data => {
        console.log('1' + data);
      }, error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }
}
