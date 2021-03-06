import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subscription: Subscription = new Subscription();

  constructor( public authService: AuthService,
               public store: Store<AppState>, ) { }



  ngOnInit() {
    this.subscription = this.store.select('ui')
        .subscribe( ui => this.cargando = ui.isLoading );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  onSubmit(data: any ) {
    this.authService.crearUsuario(data.nombre, data.email, data.password)

  }

}
