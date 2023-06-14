import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfGamesComponent } from './table-of-games.component';

describe('TableOfGamesComponent', () => {
  let component: TableOfGamesComponent;
  let fixture: ComponentFixture<TableOfGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOfGamesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableOfGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
