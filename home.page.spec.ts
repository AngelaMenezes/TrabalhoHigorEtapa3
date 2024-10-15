import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('adicionar um novo político', () => {
    component.salvarPolitico({ nome: 'Novo Politico', numero: 99, partido: 'Test', cargo: 'Vereador' });
    expect(component.politicos.length).toBe(3);
  });
});
