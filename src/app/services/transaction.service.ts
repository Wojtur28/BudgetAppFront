import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Transaction} from "../common/transaction";


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/transactions';

  constructor(private httpClient: HttpClient) {
  }

  getTransactionList(): Observable<Transaction[]> {
    return this.httpClient.get<GetResponse>(`${this.baseUrl}`).pipe(
      map((response: any) => {
        return response;
      }));

  }

}


interface GetResponse {
  id: number;
  date: Date;
  total: number;
  transactionType: any;
  notes: string;
}

