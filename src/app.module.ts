import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { AppResolver } from '@app/app.resolver';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { UserModule } from '@modules/user/user.module';
import { CategoryModule } from '@modules/category/category.module';
import { ProfileModule } from '@modules/profile/profile.module';
import { PostModule } from '@modules/post/post.module';
import { graphqlModuleFactory } from '@common/configs/graphql-module.factory';
import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
import { i18nModuleFactory } from '@common/configs/i18n-module.factory';
import { AuthModule } from '@modules/auth/auth.module';
import { RedisModule } from 'src/providers/redis/redis.module';
import { EmailModule } from 'src/providers/email/email.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    GraphQLModule.forRootAsync({
      useFactory: graphqlModuleFactory
    }),
    I18nModule.forRootAsync({
      useFactory: i18nModuleFactory,
      parser: I18nJsonParser
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    CategoryModule,
    ProfileModule,
    PostModule,
    RedisModule,
    EmailModule
  ],
  providers: [AppResolver, AppService],
  controllers: [AppController]
})
export class AppModule {}
