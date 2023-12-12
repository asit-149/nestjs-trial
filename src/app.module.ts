import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';


@Module({
  imports: [UserModule, BookmarkModule],
  controllers:[AppController]
 
})
export class AppModule {}
