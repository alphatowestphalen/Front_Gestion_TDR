import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProdutComponent } from './type-produt.component';

describe('TypeProdutComponent', () => {
  let component: TypeProdutComponent;
  let fixture: ComponentFixture<TypeProdutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeProdutComponent]
    });
    fixture = TestBed.createComponent(TypeProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
