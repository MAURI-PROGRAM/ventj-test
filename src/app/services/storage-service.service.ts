import { Inject, Injectable } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: "root",
})
export class StorageServiceService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public setLocalStorage(STORAGE_KEY: string, object: any): void {
    this.storage.set(STORAGE_KEY, object);
  }
  public getLocalStorage(STORAGE_KEY: string): any {
    const currentTodoList = this.storage.get(STORAGE_KEY);
    return currentTodoList; // push new task to array
  }
  public removeLocalStorage(STORAGE_KEY: string): void {
    // get array of tasks from local storage
    const currentTodoList = this.storage.remove(STORAGE_KEY);
  }
}
