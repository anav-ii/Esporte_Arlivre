import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaocomponentComponent } from './inscricaocomponent.component';

describe('InscricaocomponentComponent', () => {
  let component: InscricaocomponentComponent;
  let fixture: ComponentFixture<InscricaocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaocomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
