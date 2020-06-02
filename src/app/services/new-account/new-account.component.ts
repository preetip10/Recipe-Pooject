import { Component, OnInit} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status:string) => {return alert('New status: ' + status);}
    )
   }

  onCreateAccount(accountName: string, accountStatus: string) {
      this.accountService.addAccount(accountName, accountStatus);
      //this.loggingService.logStatusChange(accountStatus);
  }

}
