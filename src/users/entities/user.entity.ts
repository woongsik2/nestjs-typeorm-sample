import { Entity, Column } from 'typeorm';
import { CommonEntity } from '../../entities/common/common.entity';

@Entity({ name: 'user' })
export class User extends CommonEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
