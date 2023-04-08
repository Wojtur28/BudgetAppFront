import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../common/transaction";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: any;
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactionList().subscribe( response => {
      this.transactions = response;
    });
  }


}


