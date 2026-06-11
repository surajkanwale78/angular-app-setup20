import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName = new BehaviorSubject<string>('Guest');
}
