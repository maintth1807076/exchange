import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './common/layout.component';
import {TradeComponent} from './trade/trade.component';
import {OrderComponent} from './order/order.component';
import {OpenOrderComponent} from './order/open-order/open-order.component';
import {OrderHistoryComponent} from './order/order-history/order-history.component';
import {TradeHistoryComponent} from './order/trade-history/trade-history.component';
import {WalletComponent} from './wallet/wallet.component';
import {HistoryComponent} from './history/history.component';
import {WithdrawComponent} from "./withdraw/withdraw.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, children: [
      { path: 'trade', component: TradeComponent },
      { path: 'order', component: OrderComponent, children: [
          { path: 'open-order', component: OpenOrderComponent },
          { path: 'order-history', component: OrderHistoryComponent },
          { path: 'trade-history', component: TradeHistoryComponent }
        ] }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'withdraw', component: WithdrawComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
