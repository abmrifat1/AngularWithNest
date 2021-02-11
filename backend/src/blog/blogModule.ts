import { Module } from '@nestjs/common';
import { PostController } from './controllers/postController';
import { PostService } from './services/postService';

@Module({
  imports: [],
  controllers: [
    PostController
  ],
  providers: [
    PostService
  ],
})
export class BlogModule {}
