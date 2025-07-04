import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSideMenuComponent } from './gif-side-menu.component';

describe('GifSideMenuComponent', () => {
  let component: GifSideMenuComponent;
  let fixture: ComponentFixture<GifSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
