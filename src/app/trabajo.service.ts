import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';



@Injectable()
export class TrabajoService {
  private URL = "https://fluentjobs-be77d.firebaseio.com/";
  constructor(private http: HttpClient) { 
    
  }

  getTrabajo(){
      
  }

  saveTrabajo(){
      
  }

  deleteTrabajo(){
      
  }
  
  updateTrabajo(){
      
  }
}
