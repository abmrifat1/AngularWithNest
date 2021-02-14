import { Module } from '@nestjs/common';
import { PostController } from './controllers/postController';
import { PostService } from './services/postService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/postEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity])
  ],
  controllers: [
    PostController
  ],
  providers: [
    PostService
  ],
})
export class BlogModule {}
