import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export function validateDto(dtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req.body);

    const errors = await validate(dtoInstance, {
      whitelist: true, // Remove propriedades extras
      forbidNonWhitelisted: true, // Retorna erro se houver propriedades extras
    });

    if (errors.length > 0) {
      const errorMessages = errors.map((err) =>
        Object.values(err.constraints || {}).join(', ')
      );
      return res.status(400).json({ errors: errorMessages });
    }

    next();
  };
}
