import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {



  constructor(private _http: HttpClient) { }

  getAllDevices(): Observable<any>{
    return this._http.get('http://localhost:8080/api/devices/allDevices');
  }

  getDevicesByGroup(groupId: number): Observable<any>{

    
    return this._http.get('http://localhost:8080/api/devices/getDevicesByGroup/'+groupId);
  }

}
