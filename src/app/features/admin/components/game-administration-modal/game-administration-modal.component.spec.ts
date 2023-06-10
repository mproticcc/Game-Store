import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAdministrationModalComponent } from './game-administration-modal.component';

describe('GameAdministrationModalComponent', () => {
  let component: GameAdministrationModalComponent;
  let fixture: ComponentFixture<GameAdministrationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAdministrationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAdministrationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
