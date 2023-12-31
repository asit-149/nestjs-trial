import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
// import { ProfileModule } from './profile/profile.module';



@Module({
  imports: [UserModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Asit@123',
    database: 'api',
    entities: [User],
    synchronize: true,
  }), AuthModule, ],

  controllers:[AppController, ]
 
})
export class AppModule {}
