import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './services/customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Resolver('Customer')
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Query('customers')
  async getCustomers(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Mutation('createCustomer')
  async createCustomer(@Args('createCustomerInput') createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(createCustomerDto);
  }
}
