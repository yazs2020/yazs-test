import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { orderDetails } from './data';
import { EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [SelectionService],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public data: Object[];
    public selectOptions: Object;
    public editSettings: Object;
    public toolbar: string[];

    public ngOnInit(): void {
        this.data = orderDetails;
        this.selectOptions = { persistSelection: true };
        this.editSettings = { allowDeleting: true };
        this.toolbar = ['Delete'];
    }
}