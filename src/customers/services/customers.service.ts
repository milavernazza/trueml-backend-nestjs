
  import { Injectable } from '@nestjs/common';
  import { Customer } from '../interfaces/customer.interface';
  
  @Injectable()
  export class CustomersService {
    private readonly customers: Customer[] = [];
  
    findAll(): Customer[] {
      return this.customers;
    }
  
    create(customer: CreateCustomerDto) {
      const newCustomer = {
        id: (this.customers.length + 1).toString(),
        ...customer,
      };
      this.customers.push(newCustomer);
      return newCustomer;
    }
  
    update(id: string, updates: UpdateCustomerDto) {
      const customerIndex = this.customers.findIndex(c => c.id === id);
      if (customerIndex > -1) {
        const updatedCustomer = { ...this.customers[customerIndex], ...updates };
        this.customers[customerIndex] = updatedCustomer;
        return updatedCustomer;
      }
      return null;
    }
  }
  