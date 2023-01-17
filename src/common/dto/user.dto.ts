import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    example: 1,
    required: true,
    description: 'id',
  })
  id: number;
}
