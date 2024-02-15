import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: USER.name,
      useFactory: () => {
        return UserSchema
      }
    },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
