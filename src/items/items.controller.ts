import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { CreateItemDto } from './create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto) {
    return this.itemsService.create(createItem);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.itemsService.update(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(id);
  }
}
