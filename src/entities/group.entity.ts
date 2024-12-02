import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { GroupStatus } from '../common/enums/GroupStatus.enum';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'enum', enum: GroupStatus, nullable: false })
  status: GroupStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
