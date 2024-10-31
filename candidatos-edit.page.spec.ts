
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidatosEditPage } from './candidatos-edit.page';

describe('CandidatoEditPage', () => {
  let component: CandidatosEditPage;
  let fixture: ComponentFixture<CandidatosEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosEditPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
