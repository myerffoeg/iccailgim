import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  CommonModule,

  // A11yModule,
  // ClipboardModule,
  // CdkStepperModule,
  // CdkTableModule,
  // DragDropModule,
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  MatButtonModule,
  // MatButtonToggleModule,
  MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatStepperModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatGridListModule,
  MatIconModule,
  // MatInputModule,
  MatListModule,
  // MatMenuModule,
  // MatNativeDateModule,
  // MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  // MatRadioModule,
  MatRippleModule,
  // MatSelectModule,
  MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  // PortalModule,
  // ScrollingModule
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES
  ]
})
export class MaterialModule { }
