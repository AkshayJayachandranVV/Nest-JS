import { PartialType } from '@nestjs/mapped-types';
import { CreateHeloDto } from './create-helo.dto';

export class UpdateHeloDto extends PartialType(CreateHeloDto) {}
