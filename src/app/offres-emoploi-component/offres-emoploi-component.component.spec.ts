import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresEmoploiComponentComponent } from './offres-emoploi-component.component';

describe('OffresEmoploiComponentComponent', () => {
  let component: OffresEmoploiComponentComponent;
  let fixture: ComponentFixture<OffresEmoploiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresEmoploiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresEmoploiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
