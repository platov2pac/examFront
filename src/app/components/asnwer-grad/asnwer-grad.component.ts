import { Component, OnInit } from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-asnwer-grad',
  templateUrl: './asnwer-grad.component.html',
  styleUrls: ['./asnwer-grad.component.css']
})
export class AsnwerGradComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

}
