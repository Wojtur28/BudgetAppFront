import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { HttpClientModule } from "@angular/common/http";
import { TransactionService } from "./services/transaction.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
