import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ValidationMessageModule } from "../shared/validation-mensage/validation-message.module";
import { AppComponent } from './app.component';
import { InitialsIconComponent } from './table/components/initials-icon/initials-icon.component';
import { ModalComponent } from './table/components/modal/modal.component';
import { TableComponent } from './table/table.component';


@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        ModalComponent,
        InitialsIconComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        TableModule,
        DropdownModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        MultiSelectModule,
        BrowserAnimationsModule,
        ValidationMessageModule,
        DialogModule,
        NgxMaskModule.forRoot()
    ]
})
export class AppModule { }
