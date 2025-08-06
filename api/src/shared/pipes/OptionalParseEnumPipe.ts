import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override async transform(value: T, metadata: ArgumentMetadata) {
    if (typeof value === 'undefined') {
      return new Promise<T>((resolve) => resolve(value));
    }

    return super.transform(value, metadata);
  }
}
