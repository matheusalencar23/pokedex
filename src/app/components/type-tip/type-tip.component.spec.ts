import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTipComponent } from './type-tip.component';

describe('TypeTipComponent', () => {
  let component: TypeTipComponent;
  let fixture: ComponentFixture<TypeTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
