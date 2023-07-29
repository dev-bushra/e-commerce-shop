// Shared Service
// .service.ts is used to create a service that provides functionality to fetch data from an API and that data can be shared and used across multiple components throughout your application. 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class SharedService {
  constructor() { }
}
