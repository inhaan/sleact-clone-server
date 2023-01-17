import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class JoinRequestDto {
  @ApiProperty({
    example: 'test@test.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '테스터',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: '1q2w3e4r',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
