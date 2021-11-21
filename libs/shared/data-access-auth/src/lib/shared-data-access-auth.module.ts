import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService]
})
export class SharedDataAccessAuthModule {}
