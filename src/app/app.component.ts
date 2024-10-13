import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Đánh dấu AppComponent là standalone
  template: `<router-outlet></router-outlet>`, // Sử dụng router outlet
  imports: [RouterOutlet] // Đảm bảo RouterOutlet được import
})
export class AppComponent {}
