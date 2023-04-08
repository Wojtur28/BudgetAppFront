
enum TransactionType {
  TRANSFER,
  STANDING_ORDER,
  CARD_PAYMENT,
  BLIK_PAYMENT,
  WITHDRAWAL_AT_ATM, //ATM - Automated Teller Machine
  ATM_DEPOSIT,
  SURGERY_AT_THE_FACILITY
}
export class Transaction {

  constructor(public id: number,
              public date: Date,
              public total: number,
              public transactionType: any,
              public notes: string ) {
  }
}
