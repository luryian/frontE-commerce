import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarPage } from './cadastrar';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    CadastrarPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarPage),
  ],
})
export class CadastrarPageModule {}
