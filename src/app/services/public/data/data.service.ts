import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  static apiUrl: string = "http://localhost:5000";
}
