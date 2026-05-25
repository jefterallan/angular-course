import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-resgister',
  imports: [FormsModule],
  templateUrl: './resgister.html',
  styleUrl: './resgister.css',
})
export class Resgister {
  private accountService = inject(AccountService);
  cancelledRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register(){
    this.accountService.register(this.creds).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    });
  }

  cancel(){
    this.cancelledRegister.emit(false);
  }
}
