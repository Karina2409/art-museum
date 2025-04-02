import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkInfoPageComponent } from './artwork-info-page.component';

describe('ArtworkInfoPageComponent', () => {
  let component: ArtworkInfoPageComponent;
  let fixture: ComponentFixture<ArtworkInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkInfoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
