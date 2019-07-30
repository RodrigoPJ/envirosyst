import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviroManageComponent } from './enviro-manage.component';

describe('EnviroManageComponent', () => {
  let component: EnviroManageComponent;
  let fixture: ComponentFixture<EnviroManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviroManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviroManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
