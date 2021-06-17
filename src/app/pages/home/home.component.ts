import { Component, OnInit } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';
import { CaseModel } from 'src/app/models/case.model';
import Swal from 'sweetalert2';

// TODO Colocar esto como pantalla principal
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  cases: CaseModel[] = [];
  loading = false;

  constructor(private caseService: CasesService) { }

  ngOnInit() {
    this.loading = true;
    this.caseService.getCases()
        .subscribe(resp => {
          this.cases = resp;
          this.loading = false;
        });
  }

}
