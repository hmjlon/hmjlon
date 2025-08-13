import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { BlogSchema } from './blog.schema';
import { BlogService } from './blog.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jiyoung110077:lkl2015041@cluster0.rxgamhz.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})
export class AppModule {}
