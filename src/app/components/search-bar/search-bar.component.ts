import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
})
export class SearchBarComponent {
  @Output() protected search = new EventEmitter<string>();

  public searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  public ngOnInit(): void {
    this.searchForm
      .get('searchQuery')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query) => {
        if (this.searchForm.valid) {
          this.search.emit(query);
        }
      });
  }

  public onSubmit(): void {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value.searchQuery);
    }
  }
}
