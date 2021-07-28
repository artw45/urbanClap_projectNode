import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfServiceProvidersComponent } from './list-of-service-providers.component';

describe('ListOfServiceProvidersComponent', () => {
  let component: ListOfServiceProvidersComponent;
  let fixture: ComponentFixture<ListOfServiceProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfServiceProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
