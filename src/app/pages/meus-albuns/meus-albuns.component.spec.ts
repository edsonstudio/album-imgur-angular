import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAlbunsComponent } from './meus-albuns.component';

describe('MeusAlbunsComponent', () => {
  let component: MeusAlbunsComponent;
  let fixture: ComponentFixture<MeusAlbunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeusAlbunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeusAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
