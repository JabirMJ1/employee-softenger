import { TEmployee } from "@/types/types";

class LocalStorageManager {
    static __local__storage_key = "Softenger.data.employees";
  
    static setEmployees(employees: {[x:string]: TEmployee}) {
      sessionStorage.setItem(this.__local__storage_key, JSON.stringify(employees));
      localStorage.setItem(this.__local__storage_key, JSON.stringify(employees));
    }
  
    static getEmployees() {
      if(this.hasEmployeesSession() && this.hasEmployees()){
        return JSON.parse(sessionStorage.getItem((this.__local__storage_key)) as string)
      }
      else{
        if (this.hasEmployees()){
          const data = localStorage.getItem(this.__local__storage_key) as string;
          sessionStorage.setItem(this.__local__storage_key, data)
          return JSON.parse(data)
        }
        else{
          this.clearSessionStorage()
        }
      }
      return null;
    }
  
    static hasEmployees() {
      return this.__local__storage_key in localStorage;
    }

    static hasEmployeesSession() {
      return this.__local__storage_key in sessionStorage;
    }

    static clearSessionStorage(){
      if(this.hasEmployeesSession()){
        sessionStorage.removeItem(this.__local__storage_key);
      }
      sessionStorage.clear()
    }
  }
  
  export default LocalStorageManager;
  