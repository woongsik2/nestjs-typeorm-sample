import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class CommonEntity extends BaseEntity {
  /**
   * 컬럼별 사용 할 수 있는 옵션.
   * @PrimaryGeneratedColumn
   * @Column({ tpye: 'varchar', length: 200, unique: true, nullable: true })
   * @Column({ nullable: true })
   * @Column({ default: false })
   */
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
