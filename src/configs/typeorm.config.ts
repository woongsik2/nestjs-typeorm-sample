import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeormConfig(configService: ConfigService) {
  const env = configService.get('NODE_ENV');
  if (!['dev', 'prod'].includes(env)) {
    throw Error('반드시 dev, prod 중 하나의 환경에 속해야 합니다.');
  }

  const synchronize = configService.get<string>('SYNCHRONIZE') === 'TRUE' ? true : false;
  const logging = configService.get<string>('DB_LOGGING') === 'TRUE' ? true : false;
  const DB_TYPE: 'postgres' | null = 'postgres';

  const option: TypeOrmModuleOptions = {
    type: DB_TYPE,
    host: configService.get(`DB_HOST`),
    port: configService.get<number>(`DB_PORT`),
    username: configService.get(`DB_USERNAME`),
    password: configService.get(`DB_PASSWORD`),
    database: configService.get(`DB_DATABASE`),
    autoLoadEntities: true,
    synchronize: env === 'production' ? false : synchronize, // 동기화 여부
    useUTC: false,
    logging: logging,
    retryAttempts: env === 'production' ? 10 : 1,
  };

  return option;
}
