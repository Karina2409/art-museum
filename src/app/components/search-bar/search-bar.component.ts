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
      searchQuery: new FormControl('', []),
    });
  }

  public ngOnInit(): void {
    this.searchForm
      .get('searchQuery')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        query = query.trim();
        if (query === '') {
          this.search.emit(query);
          return;
        }

        this.searchForm.get('searchQuery')?.setValidators([Validators.minLength(3)]);
        this.searchForm.get('searchQuery')?.updateValueAndValidity({ emitEvent: false });

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
