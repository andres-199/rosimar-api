import { Routes } from 'nest-router';
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

export const publicRoutes: Routes = [
  { path: 'brands', module: BrandsModule },
  { path: 'categories', module: CategoriesModule },
  { path: 'company', module: CompanyModule },
  { path: 'contact', module: ContactModule },
  { path: 'offers', module: OffersModule },
  { path: 'password_recoveries', module: PasswordRecoveriesModule },
  { path: 'persons', module: PersonsModule },
  { path: 'products', module: ProductsModule },
  { path: 'roles', module: RolesModule },
  { path: 'users', module: UsersModule },
  { path: 'images', module: ImagesModule },
];
