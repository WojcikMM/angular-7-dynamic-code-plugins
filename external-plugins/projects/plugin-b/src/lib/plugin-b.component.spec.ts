import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginBComponent } from './plugin-b.component';

describe('PluginBComponent', () => {
  let component: PluginBComponent;
  let fixture: ComponentFixture<PluginBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
