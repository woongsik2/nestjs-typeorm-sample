import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Board } from '../../board/entities/board.entity';

@Entity({ name: 'comment' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  // board <-> comment relation 설정
  @ManyToOne(() => Board, (board) => board.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  board: Board;
}
