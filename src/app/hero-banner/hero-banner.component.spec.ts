/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HeroBannerComponent } from './hero-banner.component';

describe('The Banner template', () => {
  let comp:     HeroBannerComponent;
  let fixture:  ComponentFixture<HeroBannerComponent>;
  let de:       DebugElement;
  let el:       HTMLElement;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [HeroBannerComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    fixture = TestBed.createComponent( HeroBannerComponent );
    comp = fixture.componentInstance;
    de = fixture.debugElement.query( By.css( 'h1' ) );
    el = de.nativeElement;
  });

  xit('should have no title in the DOM until `detectChanges`', () => {
    expect(el.textContent).toBe('');
    expect( el.textContent ).toBe( comp.title );
  });

  it('should display the original title', () => {
    // fixture.detectChanges();
    expect( el.textContent ).toBe( comp.title );
  });

  it('should display another title', () => {
    comp.title = 'holz';
    fixture.detectChanges();
    expect(el.textContent).toContain('holz');
  });

  it('should still see the original title after the comp.title changed', () => {
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    // Display the old title, becuause angular did not hear the change
    expect(el.textContent).toBe(oldTitle);
  });
});