import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoDetailComponent } from './memo-detail.component';

describe('MemoDetailComponent', () => {
  let component: MemoDetailComponent;
  let fixture: ComponentFixture<MemoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
