import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoUrl } from './configs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigConditionPassModule } from './modules/config-condition-pass/config-condition-pass.module';
import { StudyProcessModule } from './modules/study-process/study-process.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'src/public'),
    }),
    UsersModule,
    AuthModule,
    StudyProcessModule,
    ConfigConditionPassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
