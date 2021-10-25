import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { CompanyModule } from './company/company.module';
import { ContactModule } from './contact/contact.module';
import { ImagesModule } from './images/images.module';
import { OffersModule } from './offers/offers.module';
import { PasswordRecoveriesModule } from './password-recoveries/password-recoveries.module';
import { PersonsModule } from './persons/persons.module';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BrandsModule,
    CategoriesModule,
    CompanyModule,
    ContactModule,
    OffersModule,
    PasswordRecoveriesModule,
    PersonsModule,
    ProductsModule,
    RolesModule,
    UsersModule,
    ImagesModule,
  ],
})
export class PublicModule {}
