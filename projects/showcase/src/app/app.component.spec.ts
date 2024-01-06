import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; 
import { ConfirmationService, MessageService } from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [ConfirmationService, MessageService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'showcase' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('showcase');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Showcase Ui - Software Development Kit Library'
    );
  });

  it('should render the card component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('lib-card')).toBeTruthy();
  });

  it('should onToggleStar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.isStarModalSelected).toBe(false);

    app.onToggleStar();
    expect(app.isStarModalSelected).toBe(true);

    app.onToggleStar();
    expect(app.isStarModalSelected).toBe(false);
  });

  it('should  openDetail', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.isStarModalSelected).toBe(false);

    app.onDetail();
    expect(app.isStarModalSelected).toBe(false);
  });

  it('should call confirmationService.confirm with the correct parameters', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const confirmationServiceSpy = spyOn(app['confirmationService'], 'confirm');
    const messageServiceSpy = spyOn((app as any).messageService, 'add');

    app.onDetail();

    expect(confirmationServiceSpy).toHaveBeenCalledWith({
      accept: jasmine.any(Function),
      reject: jasmine.any(Function),
    });

    const acceptCallback =
      confirmationServiceSpy.calls.mostRecent().args[0]?.accept;
    if (acceptCallback) {
      await acceptCallback();
    }

    expect(messageServiceSpy).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Shared',
      detail: 'Your content has been shared',
      life: 3000,
    });

    const rejectCallback =
      confirmationServiceSpy.calls.mostRecent().args[0]?.reject;
    if (rejectCallback) {
      await rejectCallback();
      expect(messageServiceSpy).toHaveBeenCalledWith({
        severity: 'info',
        summary: 'Closed Details',
        detail: 'Details Closed',
        life: 3000,
      });
    }

    expect(messageServiceSpy).toHaveBeenCalledWith({
      severity: 'info',
    summary: 'Closed Details',
    detail: 'Details Closed',
    life: 3000,
    });
  });
});

 