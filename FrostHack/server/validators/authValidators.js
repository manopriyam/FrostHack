import zod from 'zod';

export const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
    password: zod.string().min(6)
});

export const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

export const updateSchema = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().min(1).optional(),
    lastName: zod.string().min(1).optional(),
});