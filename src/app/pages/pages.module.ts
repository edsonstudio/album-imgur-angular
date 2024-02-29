import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusAlbunsComponent } from './meus-albuns/meus-albuns.component';
import { AlbumComponent } from './album/album.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MeusAlbunsComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule
  ]
})
export class PagesModule { }
