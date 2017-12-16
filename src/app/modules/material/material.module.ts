import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule,
  MatGridListModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
