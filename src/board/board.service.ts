import { Body, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
  ) {}
  async create(createBoardDto: CreateBoardDto) {
    return await this.boardRepo.save(createBoardDto);
  }

  async boardAllList() {
    return await this.boardRepo.find({ order: { id: 'ASC' } });
  }

  async getBoard(id: number) {
    return await this.boardRepo.findOneBy({ id: id });
  }

  async update(@Body() id: number, @Body() updateBoardDto: UpdateBoardDto) {
    return await this.boardRepo.update(id, updateBoardDto);
  }

  async remove(id: number) {
    return await this.boardRepo.delete(id);
  }
}
