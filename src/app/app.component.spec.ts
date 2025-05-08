import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TranslateService', ['addLangs', 'setDefaultLang', 'use', 'getDefaultLang']);
    spy.getDefaultLang.and.returnValue('bg');
    spy.currentLang = 'bg';

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        AppComponent
      ],
      providers: [
        { provide: TranslateService, useValue: spy }
      ]
    }).compileComponents();

    translateServiceSpy = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize with default language', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger constructor
    expect(translateServiceSpy.setDefaultLang).toHaveBeenCalledWith('bg');
    expect(translateServiceSpy.getDefaultLang()).toBe('bg');
  });

  it('should change language when changeLanguage is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const event = { target: { value: 'en' } } as unknown as Event;
    app.changeLanguage(event);
    expect(translateServiceSpy.use).toHaveBeenCalledWith('en');
    expect(localStorage.getItem('language')).toBe('en');
  });
});