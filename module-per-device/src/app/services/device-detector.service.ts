import { Injectable } from '@angular/core';
import * as MobileDetect from 'mobile-detect';
import { BehaviorSubject } from 'rxjs';

export enum APP_DEVICE {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  PHONE = 'PHONE'
}

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  private appDeviceBehaviourSubject = new BehaviorSubject<APP_DEVICE>(APP_DEVICE.DESKTOP);
  public appDeviceState$ = this.appDeviceBehaviourSubject.asObservable();
  public appState = APP_DEVICE.DESKTOP;

  constructor() {
      const deviceDetect = new MobileDetect(window.navigator.userAgent);

      if (deviceDetect.tablet()) {
          this.appState = APP_DEVICE.TABLET;
      } else if (deviceDetect.phone()) {
          this.appState = APP_DEVICE.PHONE;
      }
      this.appDeviceBehaviourSubject.next(this.appState);
  }

  public isPhoneResolution(): boolean {
      return this.appState === APP_DEVICE.PHONE;
  }

  public isTabletResolution(): boolean {
      return this.appState === APP_DEVICE.TABLET;
  }
}
