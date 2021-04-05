import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HeaderComponent} from './common/header.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './common/menu.component';
import {LayoutComponent} from './common/layout.component';
import {TradeComponent} from './trade/trade.component';
import {OrderComponent} from './order/order.component';
import {OpenOrderComponent} from './order/open-order/open-order.component';
import {OrderHistoryComponent} from './order/order-history/order-history.component';
import {TradeHistoryComponent} from './order/trade-history/trade-history.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {WalletComponent} from './wallet/wallet.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthService} from './service/auth.service';
import { HistoryComponent } from './history/history.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import {FooterComponent} from './common/footer.component';
import { WithdrawHistoryComponent } from './withdraw-history/withdraw-history.component';
import { DepositComponent } from './deposit/deposit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    LayoutComponent,
    TradeComponent,
    OrderComponent,
    OpenOrderComponent,
    OrderHistoryComponent,
    TradeHistoryComponent,
    WalletComponent,
    HistoryComponent,
    WithdrawComponent,
    FooterComponent,
    FooterComponent,
    WithdrawHistoryComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
