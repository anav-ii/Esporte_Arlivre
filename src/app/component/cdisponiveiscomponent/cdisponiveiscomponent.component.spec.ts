import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdisponiveiscomponentComponent } from './cdisponiveiscomponent.component';

describe('CdisponiveiscomponentComponent', () => {
  let component: CdisponiveiscomponentComponent;
  let fixture: ComponentFixture<CdisponiveiscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdisponiveiscomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CdisponiveiscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
