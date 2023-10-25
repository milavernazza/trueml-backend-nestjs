import { Module } from '@nestjs/common';
import { AppGraphQLModule } from './graphql.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [AppGraphQLModule, CustomersModule],
})
export class AppModule {}