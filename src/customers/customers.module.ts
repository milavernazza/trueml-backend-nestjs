import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './controllers/customers.controller';
import { CustomersResolver } from './customers.resolver';

@Module({
  providers: [CustomersService, CustomersResolver],
  controllers: [CustomersController],
})
export class CustomersModule {}