import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  public filterForm: FormGroup;

  public columnsTable: string[] = [
    'select',
    'Column1',
    'Column2',
    'Column3',
    'Column4',
  ];
  private NUMBER_PATTERN = `^[0-9]*$`;
  public dataCrud: Array<any> = [];
  public MAX_LENGTH_ID = 100;
  public disabled = false;


  public selection = new SelectionModel<any>(false, []);

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm() {
    this.filterForm = this.formBuilder.group({
      Id: new FormControl('', [Validators.pattern(this.NUMBER_PATTERN), Validators.maxLength(100)])
    });
  }


  // tslint:disable-next-line:typedef
  getData() {


  }

  clear() {
    this.filterForm.get('Id').setValue('');
  }

  goToDetail(Id: number) {
    this.router.navigate(['/crud/detail', Id]);
  }

  create() {
    this.router.navigate(['/crud/detail']);
  }

  delete(Id: string) {
    this.disabled = true;
  }


}
